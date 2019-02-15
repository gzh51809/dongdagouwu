import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';
import '@/sass/fenlei.scss';
import {Link} from 'react-router-dom';

class fenlei extends Component{
    constructor(){
        super();
        this.state = {
            //左边列表
            data1:[],
            //商品展示头部图片
            data2:[],
            //商品展示
            data3:[],
            //按需加载商品展示
            data4: 5721,
            data5: 'dianji'
            

        }

    }
    change(val){
        this.setState({
            data4:val
        })
        var url2 = `http://m.ocj.com.cn/mt/navcategorynew/${this.state.data4}`;
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url2,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data);

            //轮播图
            var ban3 = res.middleCategories[0]
            var ban4 = res.middleCategories
            ban4 = ban4.slice(1)
            //console.log(ban2);



            this.setState({
                data2 : ban3,
                data3 : ban4
               
            });
            // console.log(this.state.two);
            // 修改state
            // this.setState({
            //     arr:res
            // })
            // 打印输出
            // console.log(this.state.arr)
        })
        console.log(this.state.data4);
    }
    
    componentDidMount(){
        //请求数据的网址
        var url = "https://m.ocj.com.cn/mt/leftnav"
        var url2 = `https://m.ocj.com.cn/mt/navcategorynew/${this.state.data4}`;
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url2,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data);

            //轮播图
            var ban1 = res.middleCategories[0]
            var ban2 = res.middleCategories
            ban2 = ban2.slice(1)
            console.log(ban2);



            this.setState({
                data2 : ban1,
                data3 : ban2
               
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
            var ban = res
            
            //console.log(ban);



            this.setState({
                data1 : ban
               
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
            <div className="page mine">
                 <HomeHeader/>
                    <footer>
                    <BottomBar/>
                </footer>
                <div className="main">
                    <div className="anv">
                        <div className="left">
                            <ul>
                                {
                                this.state.data1.map(item=>{
                                    return <li className={item.code_mgroup} onClick={this.change.bind(this,item.code_mgroup)} >{item.code_name}</li>
                                })
                                
                            }
                               
                                
                            </ul>
                        </div>
                        <div className="right">
                            <div className="right2">
                                <div className="top">
                                            <img src={this.state.data2.tag_img_path} alt={this.state.data2.tag_img_path} />
                                    </div>
                                {
                                        this.state.data3.map(item=>{
                                            return <div>
                                        
                                            <div className="biaoti">
                                                <span>{item.shop_nm_2}</span>
                                            </div>
                                            <ul className="nav">
                                                {
                                                    item.categoryList.map(item=>{
                                                        return <li>
                                                        <div>
                                                        <Link to="/liebiao">
                                                            <img src={item.s_icon} alt={item.s_icon} />
                                                            <p>{item.shop_nm_3}</p>
                                                         </Link>   
                                                        </div>
                                                    </li>
                                                    })
                                                }   
                                            </ul>
                                            </div>
                                        })    
                                    }

                            </div>
                               

                            
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}


export default fenlei;