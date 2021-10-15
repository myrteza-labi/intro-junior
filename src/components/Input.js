import './Input.css'; 

function Input(props){
    return (
        <input  className={"Input " + props.className}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                maxLenght={props.maxLenght}
                minLength={props.minLength}
                />
    )
}

export default Input; 