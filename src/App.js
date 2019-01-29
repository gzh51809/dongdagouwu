import React, { Component } from 'react';
//引入react路由模块
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';


//引入各页面
import Home from './components/Home';
import Tvgou from './components/TVgou';
import Tuang from './components/tuanggou';
import Quan from './components/quanqiu';
import Shang from './components/shangcheng';
import Guang from './components/guangwan';

 import './sass/base.scss'
import './sass/App.scss';
//import Input from 'antd-mobile/lib/input-item/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="top">
              <div className="top1">
                <div className="left">
                  
                  <a href="JavaScript:;" className="fa fa-angle-left">分类</a>
                </div>
                <span>
                    <img src={''} alt="" />
                </span>
                <div classNam="right">
                   
                </div>
              </div>
              <div className="top2">
              <NavLink 
                to="/home" 
                activeClassName="current" 
                activeStyle={{color:'#58bc58',fontWeight:'bold'}}>首页</NavLink>
                <NavLink to="/tvgou" activeClassName="current"
                activeStyle={{color:'#58bc58',fontWeight:'bold'}}>TV购物</NavLink>
                <NavLink to="/tuanggou" activeClassName="current"
                activeStyle={{color:'#58bc58',fontWeight:'bold'}}>团购</NavLink>
                {/* <a href="JavaScript:;">首页</a>
                <a href="JavaScript:;">TV购物</a>
                <a href="JavaScript:;">团购</a>
                <a href="JavaScript:;">全球购</a>
                <a href="JavaScript:;">商城</a>
                <a href="JavaScript:;">企业官网</a>  */}
              </div>
             
          </div>
          <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={Tvgou}/>
                    <Route path="/mine" component={Tuang}/>
                    <Route path="/home" component={Quan}/>
                    <Route path="/list" component={Shang}/>
                    <Route path="/mine" component={Guang}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
      </div>
    );
  }
}

export default App;
