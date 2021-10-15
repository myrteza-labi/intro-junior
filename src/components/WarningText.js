import './WarningText.css'; 

function WarningText(props){
    return (
        <p className={"WarningText" + props.className}>
            {props.text}
        </p>
    )
}

export default WarningText; 