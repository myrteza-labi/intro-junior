import './SubscriptionButton.css'; 

function SubscriptionButton(props){
    return (
        <button onClick={props.onClick} className="SubscriptionButton" >
            CLAIM YOUR FREE TRIAL
        </button>
    )
}

export default SubscriptionButton; 