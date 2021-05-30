import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Edu' 
        }

        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }
    

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                
            </div>
        )
    }

    componentDidMount(){

        console.log('LifecycleB componentDidMount')
    }
}

export default LifeCycleB
