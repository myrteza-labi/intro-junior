import './InputBox.css'; 
import Input from './Input'; 
import WarningIcon from './WarningIcon'; 
import WarningText from './WarningText'; 

function InputBox(){
    return (
        <div className="InputBox" >
            <Input/>
            <WarningIcon/>
            <WarningText/>
        </div>
    )
}

export default InputBox; 