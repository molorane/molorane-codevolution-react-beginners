import React, { PureComponent } from 'react'

class MyPureComponent extends PureComponent {
    render() {
        console.log('Pure component');
        return (
            <div>
                My pure component {this.props.name}
            </div>
        )
    }
}

export default MyPureComponent
