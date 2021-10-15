import './WarnWarningTextingIcon.css'; 

function WarningText(){
    return (
        <p className={"WarningText" + props.className}>
            {props.text}
        </p>
    )
}

export default WarningText; 