import { useState } from "react";
import './form.module.scss';

function Form (props:any) {
    const {setIsLogged} = props;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleUserName = (evt: React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(evt.target.value);
    }
    const handlePassword = (evt: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(evt.target.value);
    }
    const validateUser = (evt:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        evt.preventDefault();
        if(userName === localStorage.getItem('user') && password === localStorage.getItem('password')){
            setIsLogged(true);
        }else{
            setIsLogged(false);
        }
    }
    return ( 
        <form>
            <input 
            type='text' 
            placeholder='Enter username...' 
            value={userName} 
            onChange={handleUserName}/>
            <input 
            type='password' 
            placeholder='Enter password...'
            value={password}
            onChange={handlePassword}/>
            <button onClick={validateUser}>LOGIN</button>
        </form>
    );
}

export {Form} ;