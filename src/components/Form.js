import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: ''
        }
    }
    
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value 
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSumbit = (event) =>{
        event.preventDefault();
        alert(this.state);
        console.log(this.state);
    }


    render() {

        const {username, comments, topic} = this.state

        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <div>

                        <label>Username: </label>
                        <input type='text' 
                                value={username}
                            onChange={this.handleUsernameChange} />
                    </div>
                    <div>

                        <label>Comments: </label>
                        <textarea
                                value={comments}
                                onChange={this.handleCommentsChange} />
                    </div>
                    <div>

                        <label>Topic: </label>
                        <select value={topic} onChange={this.handleTopicChange} >
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
