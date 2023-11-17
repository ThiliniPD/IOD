function Greeting (props) {
    let name = 'unknown'

    return (
        <div className="Greeting componentBox">
            
            {props.name ? `Hello ${props.name}` : 'Hello World'}
            {props.children && <div className="otherMessages">{props.children}</div>}

        </div>
    )
};
  
export default Greeting;