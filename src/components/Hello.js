import React from 'react'

const Hello = () => {
    
    return React.createElement('div', {
        id:'hello',
        className: 'dummy'
    }, React.createElement('h1', null, 'Hello madw'))
}

export default Hello
