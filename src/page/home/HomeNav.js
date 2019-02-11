import React,{Component} from 'react';

class HomeNav extends Component{
    constructor(){
        super();
        this.state = {
            iconNavTabs:[
                {
                    iconPic:require('./img/icon_nav1.png'),
                    name:'看视频'
                },
                {
                    iconPic:require('./img/icon_nav2.png'),
                    name:'热销榜'
                },
                {
                    iconPic:require('./img/icon_nav3.png'),
                    name:'爆款团购'
                },
                {
                    iconPic:require('./img/icon_nav4.png'),
                    name:'SMG商城'
                },
                {
                    iconPic:require('./img/icon_nav5.png'),
                    name:'我的OCJ'
                },
                {
                    iconPic:require('./img/icon_nav6.png'),
                    name:'鲜东方'
                },
                {
                    iconPic:require('./img/icon_nav7.png'),
                    name:'赚新品'
                },
                {
                    iconPic:require('./img/icon_nav8.png'),
                    name:'拼团'
                },
                {
                    iconPic:require('./img/icon_nav9.png'),
                    name:'全球购'
                },
                {
                    iconPic:require('./img/icon_nav10.png'),
                    name:'购物车'
                },
            ],
        }
    }
    render(){
        return (
            <ul className="home-nav">
                {
                    this.state.iconNavTabs.map(item=>{
                        return (
                        <li key={item.name}>
                            <img src={item.iconPic} />
                            <span>{item.name}</span>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default HomeNav;