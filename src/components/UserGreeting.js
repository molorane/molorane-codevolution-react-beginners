import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        return this.state.isLoggedIn && <div>Welcome Nomfundo</div>

        // return (
        //     this.state.isLoggedIn? <div>Welcome Nomfundo</div>: <div>Welcome Guest</div>
        // )

        // let message;
        // if(this.state.isLoggedIn){
        //     message = 'Welcome Nomfundo'
        // }else{
        //     message = 'Welcome Guest'
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return <div>Welcome Nomfundo</div>
        // }else{
        // return (
        //     <div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
        // }
        // return (
        //     <div>
        //         <div>Welcome Nomfundo</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
