import './Input.css'; 

function Input(props){
    return (
        <input  onChange={props.onChange}
                className={"Input " + props.className}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                maxlenght={props.maxLenght}
                minlenght={props.minLength}
                />
    )
}

export default Input; 