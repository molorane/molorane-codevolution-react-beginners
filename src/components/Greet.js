

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h4>Hello {props.name}</h4>
            {props.children}
        </div>
    )
}

export default Greet
