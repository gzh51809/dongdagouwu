import React,{Component} from 'react';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            recommend:[
                
            ]
        }
    }
    render(){
        return (
            <div className="home">
                <h1>商城</h1>
            </div>
        )
    }
}
export default Home;