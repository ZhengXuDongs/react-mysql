import React from 'react';
import { render } from 'react-dom';

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

// 引入Ant-Design样式 & Animate.CSS样式
/*import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';*/
console.log(11111111111);

// 引入主体样式文件
import './main.css';

// 引入单个页面（包括嵌套的子页面）
import Login from './components/login.js';
import myTable from './components/table.js';
import myCard from './components/fetch.js';
import Register from './components/register.js';
import Index from './components/index.js';

const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            user:sessionStorage.user ? sessionStorage.user : null,
        }
    }

    handleClick = (e) =>{

    }

    render() {
        return (
            <div>
                <div className="menu">
                    <div><Link className="menuitem" to="login">登录</Link><Link className="menuitem" to="register">注册</Link></div>
                </div>
                <div>{ this.props.children }</div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute path="login" component={Login} />
            <Route path="myTable" component={myTable} />
            <Route path="myCard" component={myCard} />
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
            <Route path="index" component={Index} />
        </Route>
    </Router>
), document.getElementById('app'));