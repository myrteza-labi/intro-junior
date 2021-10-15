import './WarningText.css'; 

function WarningText(props){
    return (
        <p className={"WarningText " + props.className}>
            {props.warningText}
        </p>
    )
}

export default WarningText; 