import React from 'react'

function ChildCompenent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
        </div>
    )
}

export default ChildCompenent
