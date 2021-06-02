import React, { Component } from 'react'

class RefsOldDemo extends Component {

    constructor(props) {
        super(props)
        this.cRef = null;
        this.setCBRef = (element) => {
            this.cRef = element
        }
    }

    componentDidMount(){
        if(this.cRef){
            this.cRef.focus()
        }
        console.log(this.inputRef)
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.setCBRef} />
                <button onClick={this.clickHandler}>Nomfundo</button>
            </div>
        )
    }
}

export default RefsOldDemo
