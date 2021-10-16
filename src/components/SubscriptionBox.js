import './SubscriptionBox.css'; 
import SubscriptionButton from './SubscriptionButton'; 
import Terms from './Terms'; 

function SubscriptionBox(props){
    return (
        <div className="SubscriptionBox" >
            <SubscriptionButton onClick={props.onClick}/>
            <Terms/>
        </div>
    )
}

export default SubscriptionBox; 