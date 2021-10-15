import './InputBox.css'; 
import Input from './Input'; 
import WarningIcon from './WarningIcon'; 
import WarningText from './WarningText'; 

function InputBox(props){
    return (
        <div className="InputBox" >

            <Input  className={props.inputClassname}
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    maxLenght={props.maxLenght}
                    minLength={props.minLength}/>

            <WarningIcon className={props.warningIconClassname}/>
            <WarningText className={props.warningTextClassname} warningText={props.warningText}/>
        </div>
    )
}

export default InputBox; 