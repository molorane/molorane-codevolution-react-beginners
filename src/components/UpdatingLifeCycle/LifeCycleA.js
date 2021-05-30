import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Edu' 
        }

        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'NMM'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>

                <button onClick={this.changeState}>Click</button>
                <LifeCycleB />
            </div>
        )
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }


}

export default LifeCycleA
