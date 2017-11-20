import UserBase from '../base/user.js';
const log = require('log4js').getLogger('logic/user');

class UserLogic {

    static async Register(ctx){
    	let result = null;
    	console.log(111111);
    	let data = ctx.request.body;
        data.flag = 1;
    	log.info('param的值为：',data,typeof(data));
    	const where = {
            username:data.username
        };
    	await UserBase.Save({data,where}).then(res=>{
    		console.log('asasaa:',res);
            if(res.type=='add'){
                result = {isSucc:true,code:200,message:'添加成功'};
            }else if(res.type=='exist'){
                result = {isSucc:false,code:202,message:'该用户名已存在'};
            }else{
                result = {isSucc:false,code:204,message:'参数不全或字段类型错误'};
            }
    	})
    	ctx.body = result;
    }

    static async Login(ctx){
        let result = null;
        let param = ctx.request.body;
        const field = '*';//['username','password','mobile','email','usertype','condiition','contactaddress'];
        const where = `username=${param.username} && password=${param.password}`;
        let userData = await UserBase.search({field,where});
        delete userData.password;
        if(userData){
            result={isSucc:true,code:200,message:'成功',result:userData};
        }else{
            result={isSucc:false,code:204,message:'失败',result:''};
        }
        ctx.body = result;
    }

    static async GetCountry(ctx){
        let result = null;
        await UserBase.Search('select * from country').then(res=>{
            result = res;
        })
        return result;
    }
    static async GetProvince(ctx){
        let result = null;
        await UserBase.Search('select * from province').then(res=>{
            result = res;
        })
        return result;
    }
    static async GetCity(ctx){
        let result = null;
        await UserBase.Search('select * from city').then(res=>{
            result = res;
        })
        return result;
    }
    static async GetDistrict(ctx){
        let result = null;
        await UserBase.Search('select * from district').then(res=>{
            result = res;
        })
        return result;
    }
    static async GetAddress(ctx){
        let result = null;
        const address = [];
        const country = {}
        const province = [];
        const sqlsearch = 'select * from country';
        const co =await UserLogic.GetCountry();
        const pr = await UserLogic.GetProvince();
        const ci = await UserLogic.GetCity();
        const di = await UserLogic.GetDistrict();
        const arr = [];
        
     
        co.map(item=>{
            var cos = {};
            const prt = [];
            cos.value=item.countryId;
            cos.label=item.countryName;
            pr.map(item1=>{
                if(item.countryId==item1.countryId){
                    var prs = {}; 
                    const cit = [];
                    prs.value=item1.provinceId;
                    prs.label=item1.provinceName;
                    prt.push(prs);
                    cos.children=prt;
                    ci.map(item2=>{
                        if(item1.provinceId==item2.provinceId){
                            var cis = {};
                            const dit = [];
                            cis.value = item2.cityId;
                            cis.label = item2.cityName;
                            cit.push(cis);
                            prs.children=cit;
                            di.map(item3=>{
                                if(item2.cityId==item3.cityId){
                                    var dis = {};
                                    dis.value = item3.districtId;
                                    dis.label = item3.districtName;
                                    dit.push(dis);
                                    cis.children=dit;
                                }                                
                            })
                        }                       
                    })
                }                
            })
            arr.push(cos);
        })
        if(arr){
            result={isSucc:true,code:200,result:arr,message:'成功'};
        }else{
            result={isSucc:false,code:204,result:'',message:'失败'};
        }
        ctx.body = result;
    }

}

export default UserLogic;