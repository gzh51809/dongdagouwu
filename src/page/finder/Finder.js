import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';
import HomeBanner from './HomeBanner';
import '@/sass/finder.scss';

class Finder extends Component{
    constructor(){
        super();
        this.state = {
            //四大栏目
            data1:[],
            //新团购分类
            data2:[],
            //全部团购
            data3:[]

        }
    }
    componentDidMount(){
        //请求数据的网址
        var url = "http://m.ocj.com.cn/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=11223&corner_nums%5B%5D=10841&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num="
        var option = {
            //请求类型
            methods:"get"
        }
        var url1 = "http://m.ocj.com.cn/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=12221&corner_nums%5B%5D=12222&corner_nums%5B%5D=12223&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num="
        var url2 = "http://m.ocj.com.cn/mt/contsOtuan1_Rb?page=1&sortType=default&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num="
        fetch(url2,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data);

            //轮播图
            var ban2 = res[0].setList[0].contentList;
            
            console.log(ban2);



            this.setState({
                data3 : ban2,
                
            });
            // console.log(this.state.two);
            // 修改state
            // this.setState({
            //     arr:res
            // })
            // 打印输出
            // console.log(this.state.arr)
        })
        fetch(url1,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data);

            //轮播图
            var ban1 = res.setList[0].contentList;
            
            console.log(ban1);



            this.setState({
                data2 : ban1,
                
            });
            // console.log(this.state.two);
            // 修改state
            // this.setState({
            //     arr:res
            // })
            // 打印输出
            // console.log(this.state.arr)
        })
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data);

            //轮播图
            var ban = res[1].setList[0].contentList;
            
            console.log(ban);



            this.setState({
                data1 : ban,
                
            });
            // console.log(this.state.two);
            // 修改state
            // this.setState({
            //     arr:res
            // })
            // 打印输出
            // console.log(this.state.arr)
        })


    }
    render(){
        return (
            <div className="page finder">
                <HomeHeader/>
                    <footer>
                    <BottomBar/>
                </footer>
            <div className="main">
                   
                    
                <HomeBanner/>
                <div className="shidalan">
                    <ul>
                {
                            this.state.data1.map(item=>{
                                return   <li>
                                <img src={item.item_image} alt={item.item_image} />
                            </li>
                            })
                            
                        }
                    </ul>
                </div>
                <div className="xintuan">
                    <ul>
                {
                            this.state.data2.map(item=>{
                                return   <li>
                                <img src={item.item_image} alt={item.item_image} />
                            </li>
                            })
                            
                        }
                    </ul>
                </div>
                <div className="quanbu">全部团购</div>

                <div className="nav">
                {
                            this.state.data3.map(item=>{
                                return <div className="nav-top">
                                <div className="top">
                                    <img src={item.item_image} alt={item.item_image} />
                                    <div className="zhekou">
                                        <span>8</span>折
                                        <p>团&nbsp;&nbsp;购</p>
                                    </div>
                                </div>
                                <div className="but">
                                    <div className="jieshao">
                                    【电视团购】却老斋 破壁灵芝孢子粉优惠装0.99g/袋*（100*3+50）
                                    </div>
                                    <div className="jiage">￥1,165</div>
                                </div>
                            </div>
                            })
                            
                        }
                    
                    
                </div>
                </div>
                
            </div>
            
        )
    }
}

export default Finder;