import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import '@/sass/home.scss';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';
import HomeBanner from './HomeBanner';
import HomeNav from './HomeNav'

class Home extends Component{
    constructor(){
        super();
        this.state = {
            //暖冬清仓
            data1:[],
            //商品展示
            data2:[],
            open: true,

        }
    }
    componentDidMount(){
        //请求数据的网址
        var url = "http://m.ocj.com.cn/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=9541&corner_nums%5B%5D=11221&corner_nums%5B%5D=9544&corner_nums%5B%5D=9545&corner_nums%5B%5D=9681&corner_nums%5B%5D=11161&corner_nums%5B%5D=12081&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num="
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data);

            //轮播图
            var ban = res[3].setList[0].contentList;
            var ban2 = res[2].setList[0].contentList;
            console.log(ban);



            this.setState({
                data1 : ban,
                data2 : ban2
            });
            // console.log(this.state.two);
            // 修改state
            // this.setState({
            //     arr:res
            // })
            // 打印输出
            // console.log(this.state.arr)
        })
        let Change = (...args) => {
            console.log(args);
            this.setState({ open: !this.state.open });
          }


    }
    render(){
        return (
            <div className="page home">
                <HomeHeader/>
                <footer>
                    <BottomBar/>
                </footer>
                   
                <div className="main">
                
                    <HomeBanner/>
                    <HomeNav/>
                        {
                            this.state.data1.map(item=>{
                                return <div className="nuandon">
                                    <div className="top-img">
                                        <img src={item.item_image} alt={item.item_image} />
                                    
                                    </div>
                                    <div className="but-name">
                                            <span>{item.alt_desc}</span>
                                            <div>{item.conts_desc}</div>
                                    </div>
                                </div>
                            })
                            
                        }
                         {
                            this.state.data2.map(item=>{
                                return <div className="zhangshi">
                                    <div className="top-img">
                                        <img src={item.item_image} alt={item.item_image} />
                                    
                                    </div>
                                    <div className="but-name">
                                            <span>{item.conts_title_nm}</span>
                                            <div>￥{item.item_price}</div>
                                    </div>
                                </div>
                            })
                            
                        }
                    
                     
                </div>
                
            </div>
            
        )
    }
}

export default Home;