import './SubscriptionBox.css'; 
import SubscriptionButton from './SubscriptionButton'; 
import Terms from './Terms'; 

function SubscriptionBox(){
    return (
        <div className="SubscriptionBox" >
            <SubscriptionButton/>
            <Terms/>
        </div>
    )
}

export default SubscriptionBox; 