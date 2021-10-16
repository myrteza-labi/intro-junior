import React from 'react'; 
import './Form.css'; 
import InputBox from './InputBox'; 
import SubscriptionBox from './SubscriptionBox'; 


class Form extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            valueState1 : '',
            inputBoxClassName1 : 'InputBoxNormal', 

            inputBoxArray : 
            [
                {
                    valueState1 : '',
                    inputBoxClassName1 : 'InputBoxNormal'
                },
                {
                    valueState1 : '',
                    inputBoxClassName1 : 'InputBoxNormal'
                },
                {
                    valueState1 : '',
                    inputBoxClassName1 : 'InputBoxNormal'
                },
                {
                    valueState1 : '',
                    inputBoxClassName1 : 'InputBoxNormal'
                }
            ]


           /* errorState2 : false,
            valueState2 : '',

            errorState3 : false,
            valueState3 : '',

            errorState4 : false,
            valueState4 : '',*/

        }
        this.handleClick = this.handleClick.bind(this); 
        this.handleChange = this.handleChange.bind(this); 

        this.changeValue = this.changeValue.bind(this); 
        this.setClassNameToNormal = this.setClassNameToNormal.bind(this); 
        this.setClassNameToError = this.setClassNameToError.bind(this); 
        this.setClassName = this.setClassName.bind(this); 




    }



    handleChange(e){
        this.changeValue(e); 
    }

    changeValue(e){
        this.setState({
            valueState1 : e.target.value
        })
    }

    handleClick(){
        this.setClassName(); 
    }

    setClassName(){
        if(this.state.valueState1.length === 0){
            this.setClassNameToError(); 
        } else{
            this.setClassNameToNormal(); 
        }
    }

    setClassNameToNormal(){
        this.setState({
            inputBoxClassName1 : 'InputBoxNormal',
        })
    }

    setClassNameToError(){
        this.setState({
            inputBoxClassName1 : 'InputBoxError',
        })
    }

    
    

    
    

   



    render(){
        return (
            <div  className="Form" >
    
                <InputBox   className={this.state.inputBoxClassName1}
                            onChange={this.handleChange}
                            /*inputClassname={""}
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
    
                <InputBox   /*onChange={this.handleChange}*/
                            /*inputClassname={""}
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
    
                <InputBox   /*onChange={this.handleChange}*/
                            /*inputClassname={""}
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
    
                <InputBox   /*onChange={this.handleChange}*/
                            /*inputClassname={""}
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
    
                <SubscriptionBox onClick={this.handleClick}/>
    
            </div>
        )
    }
}

export default Form; 