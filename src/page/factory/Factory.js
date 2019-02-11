import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';
import HomeBanner from './HomeBanner';
import HomeNav from './HomeNav';
import '@/sass/nav.scss';
import '@/sass/factory.scss';
class Factory extends Component{
    constructor(){
        super();
        this.state = {
         
            
            //商品展示
            data2:[],

        }
    }
    componentDidMount(){
        //请求数据的网址
        var url = "http://m.ocj.com.cn/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=11222&corner_nums%5B%5D=9548&corner_nums%5B%5D=9549&corner_nums%5B%5D=9843&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num="
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
            
            var ban2 = res[2].setList[0].contentList;
            console.log(ban2);



            this.setState({
               
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


    }
    render(){
        return (
            <div className="page factory">
             <HomeHeader/>
                    <footer>
                    <BottomBar/>
                    </footer>
                <div className="main">
                    
                   
                    <HomeBanner/>
                    <HomeNav/>
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

export default Factory;