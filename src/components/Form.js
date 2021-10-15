import './Form.css'; 
import InputBox from './InputBox'; 
import SubscriptionBox from './SubscriptionBox'; 

function Form(props){
    return (
        <form className="Form" >

            <InputBox   /*inputClassname={""}
                        warningIconClassname={"w"}
                        warningTextClassname={""}*/
                        type={"text"}
                        name={"firstname"}
                        placeholder={"First Name"}
                        maxLenght={"40"}
                        minLength={"2"}
                        warningText={
                            "First Name cannot be empty"
                        }/>

            <InputBox   /*inputClassname={""}
                        warningIconClassname={"w"}
                        warningTextClassname={""}*/
                        type={"text"}
                        name={"lastname"}
                        placeholder={"Last Name"}
                        maxLenght={"40"}
                        minLength={"2"}
                        warningText={
                            "Last Name cannot be empty"
                        }/>

            <InputBox   /*inputClassname={""}
                        warningIconClassname={"w"}
                        warningTextClassname={""}*/
                        type={"email"}
                        name={"email"}
                        placeholder={"Email Address"}
                        maxLenght={"62"}
                        minLength={"10"}
                        warningText={
                            "Looks like this is not an email"
                        }/>

            <InputBox   /*inputClassname={""}
                        warningIconClassname={"w"}
                        warningTextClassname={""}*/
                        type={"password"}
                        name={"password"}
                        placeholder={"Password"}
                        maxLenght={"60"}
                        minLength={"8"}
                        warningText={
                            "Looks like this is not an email"
                        }/>

            <SubscriptionBox/>

        </form>
    )
}

export default Form; 