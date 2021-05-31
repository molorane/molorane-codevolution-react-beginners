import React, { Component } from 'react'
import MemoComponent from './MemoComponent';
import MyPureComponent from './MyPureComponent';
import RegularComponent from './RegularComponent';

class MyParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Nomfundo'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Nomfundo'
            })
        }, 2000);
    }
    

    render() {
        console.log('Parent component');
        return (
            <div>
                My Parent Component
                {
                    <MemoComponent name={this.state.name} />
                    /*
                        <RegularComponent name={this.state.name} ></RegularComponent>
                        <MyPureComponent name={this.state.name} ></MyPureComponent>
                    */
                }
                
            </div>
        )
    }
}

export default MyParentComponent
