import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import homeAction from '@/redux/actions/homeAction';

import HomeBanner from './HomeBanner';
import HomeNav from './HomeNav';
import HomeArticle from './HomeArticle';

class HomeFind extends Component{
    constructor(){
        super();
        this.state = {
            isok:false
        }
    }
    componentWillMount(){
        let {mainDatas,likeDatas,inithome} = this.props;
        axios({
            method:'get',
            url:`http://api.zhaojiafang.com/v1/index/default`,
            params:{
                AppVersion: '3.11',
                Format: 'json',
                SystemName: 'H5',
                event: '首页default',
                key: '',
                storeid: 1,
                timestamp: 1548916288973,
                Sign: 'a143696c955b2722551236ed3190e8d1'
            }
        }).then(res=>{
            let data = res.data.datas;
            inithome(data);
            this.setState({
                isok:true
            })
        }).catch((err)=>{
            console.log(err);
        });
    }
    render(){
        let {mainDatas,likeDatas} = this.props;
        return (
            <div className="home-find">
                <div className="search">
                    <a href="javascript:;">
                        <i className="iconfont icon-iconset0157"></i>
                        搜索商品或商家
                    </a>
                </div>
                <HomeBanner banners={mainDatas.banners} isok={this.state.isok}/>
                <HomeNav/>
                <HomeArticle articles={mainDatas.articles} isok={this.state.isok}/>
            </div>
        )
    }
}

// 映射home-reducer.js中的state到 this.props.goodslist 中
const mapStateToProps = state=>{
    return {
        mainDatas:state.home.mainDatas,
        likeDatas:state.home.likeDatas
    }
}
// 映射各状态更新提交方法如 remove() 到 this.props 中
const mapDispatchToProps = (dispatch,ownProps)=>{
    //ownProps为未连接Redux前的props，一般用不到
    return {
        inithome(data){
            dispatch(homeAction.init(data));
        }
    }
}
// 调用 connect 方法连接 Redux 的 store
HomeFind = connect(mapStateToProps,mapDispatchToProps)(HomeFind);

export default HomeFind;