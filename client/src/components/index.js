import React from 'react';
import { url } from '../../config/app.js';
import axios from 'axios';
console.log(url)
axios.defaults.baseURL = url;

import {
	Form,
	Input,
	Icon,
	Button,
	message,
	Checkbox,
	Cascader,
	Radio,
	Carousel,
} from 'antd';

const movie_type = [{id:1,name:'爱情'},{id:2,name:'动作'},{id:3,name:'喜剧'},{id:4,name:'动画'},{id:5,name:'恐怖'},{id:6,name:'惊悚'},{id:7,name:'悬疑'},
{id:8,name:'犯罪'},{id:9,name:'冒险'},{id:10,name:'战争'},{id:11,name:'奇幻'},{id:12,name:'运动'},{id:13,name:'武侠'},{id:14,name:'西部'},{id:15,name:'其他'}];
const movie_area = [{id:1,name:'大陆'},{id:2,name:'美国'},{id:3,name:'韩国'},{id:4,name:'日本'},{id:5,name:'印度'},{id:6,name:'朝鲜'},{id:7,name:'香港'},
{id:8,name:'泰国'},{id:9,name:'英国'},{id:10,name:'俄罗斯'},{id:11,name:'意大利'},{id:12,name:'西班牙'},{id:13,name:'德国'},{id:14,name:'波兰'},{id:15,name:'其他'}];
const movie_year = [{id:1,name:'2017'},{id:2,name:'2016'},{id:3,name:'2015'},{id:4,name:'2014'},{id:5,name:'2013'},{id:6,name:'2012'},{id:7,name:'其他'}];

const product = [ { id: 0,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 1,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 2,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 3,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 4,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 5,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 6,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 7,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 8,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 9,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 10,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 11,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 12,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 13,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 14,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 15,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 16,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 17,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 18,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' },
  { id: 19,
    imgurl: 'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg' } ]


class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			products:product,
			movie_type:movie_type,
			movie_area:movie_area,
			movie_year:movie_year,
		};
	}

	render() {

		let imgs = [
			{
				id:1,
				imgurl:'http://localhost:3030/images/0df431adcbef760978929ad025dda3cc7dd99ee7.jpg'
			},
			{
				id:2,
				imgurl:'http://localhost:3030/images/1f178a82b9014a90ae94d2e8a2773912b31bee39.jpg'
			},
			{
				id:3,
				imgurl:'http://localhost:3030/images/2cf5e0fe9925bc3108a90fd755df8db1ca13708c.jpg'
			},
			{
				id:4,
				imgurl:'http://localhost:3030/images/6f061d950a7b0208a6a330ae69d9f2d3572cc813.jpg'
			}
		];

		return (
			<div className="main_wrap">
				<div className="main_header">
					<Carousel autoplay>
						{imgs.map(item=>{
						return	<div><img src={item.imgurl}/></div>
						})}
					</Carousel>
				</div>
				<div className="main_header_content">
					<div className="header_type">
						<p style={{width:"3%",float:"left"}}><span>类型:</span></p>
						<p style={{width:"96%",marginLeft:"3%"}}>
						{this.state.movie_type.map(item=>{
							return<span className="spans">{item.name}</span>
						})}
						</p>
					</div>
					<div className="header_area">
						<span>区域:</span>
						{this.state.movie_area.map(item=>{
							return<span className="spans">{item.name}</span>
						})}
					</div>
					<div className="header_year">
						<span>年代:</span>
						{this.state.movie_year.map(item=>{
							return<span className="spans">{item.name}</span>
						})}
					</div>
				</div>

				<div className="main_content">
					<div>
						{this.state.products.map(item=>{
							return <img className="main_product_img" src={item.imgurl} />
						})}
					</div>
				</div>

			</div>

		)


	}



}


export default Index;