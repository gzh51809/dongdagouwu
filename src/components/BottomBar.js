import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class BottomBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab:'/home',
            tabs:[
                {
                    text:'首页',
                    path:'/home',
                    name:'Home',
                    // icon:'icon-shouye'
                },
                {
                    text:'TV购',
                    path:'/factory',
                    name:'Factory',
                    // icon:'icon-dianpu'
                },
                {
                    text:'团购',
                    path:'/finder',
                    name:'Finder',
                    // icon:'icon-zhaobudaojieguo'
                },
                {
                    text:'全球购',
                    path:'/cart',
                    name:'Cart',
                    // icon:'icon-gouwuche'
                },
                {
                    text:'商城',
                    path:'/mine',
                    name:'Mine',
                    // icon:'icon-gerenzhongxin'
                },
                {
                    text:'企业官网',
                    path:'/guang',
                    name:'Guang',
                    // icon:'icon-gouwuche'
                },
            ]
        }
    }
    // componentDidMount(){
    //     let hash = location.hash.split('/')[1];
    //     this.setState({
    //         selectedTab:'/' + hash
    //     })
    // }
    componentDidMount(){
        let hash = window.location.hash.split('/')[1];
        this.setState({
            selectedTab:'/'+hash
        })
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#000"
                tintColor="#ff2d51"
                barTintColor="white"
                prerenderingSiblingsNumber={0}
                noRenderContent
                font-size='14px'
            >
                {
                    this.state.tabs.map(item=>{
                        return (
                        <TabBar.Item
                            title={item.text}
                            key={item.name}
                            icon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selectedIcon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selected={this.state.selectedTab === item.path}
                            onPress={() => {
                                this.setState({
                                    selectedTab: item.path,
                                });
                                this.props.history.push(item.path);
                            }}
                        >
                        </TabBar.Item>
                        )
                    })
                }
                
            </TabBar>
        )
    }
}

// 利用withRouter高阶组件包装BottomBar组件
BottomBar = withRouter(BottomBar);

export default BottomBar;