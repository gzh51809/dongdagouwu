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
                <h1>企业官网</h1>
            </div>
        )
    }
}
export default Home;