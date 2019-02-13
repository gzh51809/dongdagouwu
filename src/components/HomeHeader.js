import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import '@/sass/HomeHeader.scss';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';

class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {
            open: true,

        }
        
       
    }
    componentDidMount(){
       let Change = (...args) => {
            console.log(args);
            this.setState({ open: !this.state.open });
          }
    }
    render(){
        return (
            <div className="home-header">
                <div>
                    <Link to="/fenlei"><i className="iconfont icon-zhaobudaojieguo"></i>分类
                    
                    </Link>
                </div>
                <div>
                <div className="search">
                        <a href="javascript:;">
                            
                            搜索商品或商家
                            <i className="iconfont icon-iconset0157"></i>
                        </a>
                </div> 
                </div>
                <div>
                    <a href="javascript:;"><i className="iconfont icon-paizhao"></i></a><a href="javascript:;"><i className="iconfont icon-dianhua"></i></a>
                </div>
            </div>
        )
    }
   
}
HomeHeader = withRouter(HomeHeader);
export default HomeHeader;