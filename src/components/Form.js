import React from 'react'; 
import './Form.css'; 
import InputBox from './InputBox'; 
import SubscriptionBox from './SubscriptionBox'; 


class Form extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
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
        }
        this.handleClick = this.handleClick.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.changeValue = this.changeValue.bind(this); 
    }

    
    handleChange(e){
        this.changeValue(e); 
    }

    /*  return the value of the "number" attibute of the target that will trigger this function  
     (in this case it will be the Input component)  */ 
    getInputNumber(e){
        let inputNumber = e.target.getAttribute('number'); 
        return inputNumber
    }

     /*  return the value of the Component that will trigger this function 
         (in this case it will be the Input component)  */ 
    getInputValue(e){
        let inputValue = e.target.value; 
        return inputValue
    }

    changeValue(e){
        /* get the number value of the current Input */
        let inputNumber = this.getInputNumber(e);    

        /* get the input value value of the current Input */
        let inputValue = this.getInputValue(e); 

        /* clone the "inputArrayBox" array in the variable "newArray" */
        let newArray = this.state.inputBoxArray.slice();

        /* change the value of "valueState1" of "the newArray[X]" by the current value. */
        newArray[inputNumber].valueState1 = inputValue; 

        /* replace the old array in the state by the new one (wich contain the news values)  */
        this.setState({
            inputBoxArray : newArray,
        })
    }


    handleClick(){       
        /* clone the old array that is contained in the state */
        let newArray = this.state.inputBoxArray.slice(); 

        /* for each items of our new Array (wich are objects) 
        if the "valueState1" key is empty (=== 0), then change the value of the 
        "inputBoxClassName1" key to "InputBoxError" wich will activate an Error UI to the user. 
        But, else if the the "valueState1" key is not empty (wich mean someone have writed
        something in the current Input) then change the value of the "inputBoxClassName1"
        to "InputBoxNormal"
        */
        newArray.forEach(item => {

            if( item.valueState1.length === 0){
                item.inputBoxClassName1 = "InputBoxError"; 
            }
            else if ( item.valueState1.length > 0){
                item.inputBoxClassName1 = "InputBoxNormal"; 
            }
            this.setState({
                inputBoxArray : newArray, 
            })
        })
    }



    
    

    
    

   



    render(){
        return (
            <div  className="Form" >
    
                <InputBox   number={0}
                            className={this.state.inputBoxArray[0].inputBoxClassName1}
                            onChange={this.handleChange}
                            type={"text"}
                            name={"firstname"}
                            placeholder={"First Name"}
                            maxLenght={"40"}
                            minLength={"2"}
                            warningText={
                                "First Name cannot be empty"
                            }/>
    
                <InputBox   number={1}
                            className={this.state.inputBoxArray[1].inputBoxClassName1}
                            onChange={this.handleChange}
                            type={"text"}
                            name={"lastname"}
                            placeholder={"Last Name"}
                            maxLenght={"40"}
                            minLength={"2"}
                            warningText={
                                "Last Name cannot be empty"
                            }/>
    
                <InputBox   number={2}
                            className={this.state.inputBoxArray[2].inputBoxClassName1}
                            onChange={this.handleChange}
                            type={"email"}
                            name={"email"}
                            placeholder={"Email Address"}
                            maxLenght={"62"}
                            minLength={"10"}
                            warningText={
                                "Looks like this is not an email"
                            }/>
    
                <InputBox   number={3}
                            className={this.state.inputBoxArray[3].inputBoxClassName1}
                            onChange={this.handleChange}
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


/*



changeValue(e){
        const newInputBoxArray = this.state.inputBoxArray.slice(); 
        let number = e.target.getAttribute("number"); 
        let numberInt = parseInt(number); 
        newInputBoxArray[numberInt].valueState1 = e.target.value; 

        this.setState({
            inputBoxArray : newInputBoxArray,
        })
    }




 setClassName(e){
        let inputNumber = e.target.getAttribute("number"); 
        let numberInt = parseInt(inputNumber); 

        if(this.state.inputBoxArray[0].valueState1.length === 0){
            this.setClassNameToError(); 
        } else{
            this.setClassNameToNormal(); 
        }
    }

    setClassNameToNormal(e){
        const newInputBoxArray = this.state.inputBoxArray.slice(); 
        let inputNumber = e.target.getAttribute("number"); 
        newInputBoxArray[inputNumber].inputBoxClassName = 'InputBoxNormal'; 


        this.setState({

            inputBoxArray : newInputBoxArray,
        })
    }

    setClassNameToError(e){
        const newInputBoxArray = this.state.inputBoxArray.slice(); 
        let inputNumber = e.target.getAttribute("number"); 
        newInputBoxArray[inputNumber].inputBoxClassName = 'InputBoxError'; 


        this.setState({

            inputBoxArray : newInputBoxArray,
        })
    }

    





*/