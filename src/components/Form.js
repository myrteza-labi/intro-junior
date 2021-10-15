import './Form.css'; 
import InputBox from './InputBox'; 
import SubscriptionBox from './SubscriptionBox'; 

function Form(){
    return (
        <form className="Form" >

            <InputBox/>
            <InputBox/>
            <InputBox/>
            <InputBox/>

            <SubscriptionBox/>
        </form>
    )
}

export default Form; 