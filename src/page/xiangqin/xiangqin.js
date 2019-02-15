import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';
import '@/sass/liebiao.scss';

class liebiao extends Component{
    constructor(){
        super();
        this.state = {
            data: [
                {
                    url: 'https://cdnimg.ocj.com.cn/item_images/item/15/25/7913/15257913S.jpg',
                    jiage: 1898,
                    jieshao: '惠人(HUROM) 三代升级版原汁机 HUSN23PG19 原装进口 双向旋转 低速43转（可制作果汁，冰淇淋，豆腐）'
                },
                {
                    url: 'https://cdnimg.ocj.com.cn/item_images/item/15/21/3640/15213640S.jpg',
                    jiage: 59,
                    jieshao: '[商城]奥克斯(AUX) 2L 304不锈钢电热水壶 HX-A5008'
                },
                {
                    url: 'https://cdnimg.ocj.com.cn/item_images/item/15/16/8801/15168801S.jpg',
                    jiage: 199,
                    jieshao: '小熊(Bear) QSJ-B03E1 绞肉机切碎机(2L容量,4刀片)'
                },
                {
                    url: 'https://cdnimg.ocj.com.cn/item_images/item/15/24/3325/15243325-S.jpg',
                    jiage: 393,
                    jieshao: '双立人(ZWILLING) 清凉一夏便携搅拌机组合'
                },
                {
                    url: 'https://cdnimg.ocj.com.cn/item_images/item/15/15/0172/15150172-S.jpg',
                    jiage: 1498,
                    jieshao: '惠人(HUROM) 二代原汁机HU-1200WN-M 韩国原装进口 低速43转 带出渣口调节阀'
                }
            ],
            
            data5: 'https://cdnimg.ocj.com.cn/item_images/item/15/25/7913/15257913S.jpg'
            

        }

    }
    render(){
        return (
            <div className="page cart">
                   
                <div className="top">
                    <div className="fanhui">返回</div>
                    <div className="biaoti">商品详情</div>
                    <div className="fenxiang">分享</div>
                </div>
               
                <div className="main">
                   
                    <div className="nav">
                        {/* <ul>
                        {
                                this.state.data.map(item=>{
                                    return  <li>
                                    <img src={item.url} alt={item.url} />
                                    <p>{item.jieshao}</p>
                                    <span>￥{item.jiage}</span>
                                </li>
                                })
                                
                            }
                           
                            
                        </ul> */}
                        {/* 图片详情 */}
                        <div className="img">tupian</div>
                        {/* 产品说明 */}
                        <div className="shuomin"></div>
                        {/* 规格选择 */}
                        <div className="guige"></div>

                    </div>
                </div>
               
                <div className="button">
                    <ul>
                        <li>客服</li>
                        <li>收藏</li>
                    </ul>
                    <span>加入购物车</span>
                    <p>立即购买</p>
                </div>
               
            </div>
            
            
        )
    }
}

export default liebiao;