import React from 'react'; 
import './InputBox.css'; 
import Input from './Input'; 
import WarningIcon from './WarningIcon'; 
import WarningText from './WarningText'; 



class InputBox extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            isNormal : true,
        }
    }

    render(){
        return (
            <div className={"InputBox " + this.props.className} >
    
                <Input  onChange={this.props.onChange}
                        className={this.props.inputClassname}
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        maxLenght={this.props.maxLenght}
                        minLength={this.props.minLength}/>
    
                <WarningIcon className={this.props.warningIconClassname}/>
                <WarningText className={this.props.warningTextClassname} warningText={this.props.warningText}/>
            </div>
        )
    }
    
}

export default InputBox; 

