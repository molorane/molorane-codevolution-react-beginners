import React , {Component} from 'react'


class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementprevState(){
        this.setState(prevState => ({
            count: ++prevState.count
        }))
    }

    increment (){
        this.setState({
            count: ++this.state.count
        }, () => {
            console.log(this.state.count)
        })
        console.log(this.state.count)
    }

    increment5(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return(
            <div>
                 <h1>Count = {this.state.count}</h1>
                <button onClick= { () => this.increment5()}>Increament</button>
            </div>
        ) 
    }
}

export default Counter;