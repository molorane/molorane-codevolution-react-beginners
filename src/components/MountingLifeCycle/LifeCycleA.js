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
    

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <LifeCycleB />
            </div>
        )
    }

    componentDidMount(){

        console.log('LifecycleA componentDidMount')
    }
}

export default LifeCycleA
