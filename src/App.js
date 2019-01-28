import React, { Component } from 'react';
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
                <a href="JavaScript:;">首页</a>
                <a href="JavaScript:;">TV购物</a>
                <a href="JavaScript:;">团购</a>
                <a href="JavaScript:;">全球购</a>
                <a href="JavaScript:;">商城</a>
                <a href="JavaScript:;">企业官网</a> 
              
              </div>
             
          </div>
      </div>
    );
  }
}

export default App;
