import React,{Component} from 'react';

class HomeNav extends Component{
    constructor(){
        super();
        this.state = {
            iconNavTabs:[
            ],
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
            var ban = res[1].setList;
           
            console.log(ban);



            this.setState({
                iconNavTabs : ban,
                
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
            <ul className="home-nav">
                {
                    this.state.iconNavTabs.map(item=>{
                        return (
                        <li key={item.name}>
                            <img src={item.contentList[0].item_image} />
                            <span>{item.contentList[0].conts_desc   }</span>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default HomeNav;