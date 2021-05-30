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

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

    componentDidMount(){

        console.log('LifecycleB componentDidMount')
    }
}

export default LifeCycleB
