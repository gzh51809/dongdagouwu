import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';
import {Link} from 'react-router-dom';

class HomeBanner extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            isok:true,
            imgHeight:280
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
            var ban = res[0].setList[0].contentList;
           
            console.log(ban);



            this.setState({
                data : ban,
                
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
            <div className="home-banner">
                
                <Carousel
                selectedIndex={0}
                autoplay={this.state.isok}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(item => (
                        <a
                        key={item.item_image}
                        href="javascript:;"
                        style={{ display: 'inline-block', width: '100%'}}
                        >
                        <img
                            src={item.item_image}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
export default HomeBanner;