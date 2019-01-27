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
                  {/* <img src={'./img/fenlei.png'} alt="" />   */}
                  <a href="JavaScript:;" className="fa fa-angle-left">分类</a>
                </div>
                <span>
                    <img src={''} alt="" />
                </span>
                <div classNam="right">
                    <input></input>
                </div>
              </div>
              <div className="top2"></div>
          </div>
      </div>
    );
  }
}

export default App;
