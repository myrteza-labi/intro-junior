import './SignUpApp.css'; 
import TextIntroduction from './TextIntroduction'; 
import AdvertisingBanner from './AdvertisingBanner'; 
import Form from './Form'; 

function SignUpApp(){
    return (
        <div className="SignUpApp">
            <TextIntroduction/>
            <AdvertisingBanner/>
            <Form/>
        </div>
    )
}

export default SignUpApp; 