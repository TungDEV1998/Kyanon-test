import React, { useState } from 'react'
import Styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';


interface IProps {
    
}

const Login: React.FC<IProps> = (props) => {

    const [userEmail, setUserEmail] = useState<string>();
    const [userPassword, setUserPassword] = useState<string>();
    const [isShown, setIsSHown] = useState(false);

    let navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleLogin", userEmail, userPassword);
        if (userEmail === 'mail@gmail.com' && userPassword === '12345') {
            console.log('success');
            navigate('/profile');
            
        } else {
            alert('Wrong Email or Password')
        }
    };

    const handleChangeUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    };
    const handleChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    };

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };


    return (
        <>
            <form onSubmit={handleLogin} method="post">
                <div className={Styles.titlecontainer}>
                    <h1>Login</h1>
                </div>
                <div className={Styles.container}>
                    <label htmlFor="uname"><b style={{color: 'blue'}}>Email:</b></label>
                    <input type="text"
                        defaultValue={userEmail}
                        placeholder="example@kyanon.digital"
                        onChange={handleChangeUserEmail} />
                    <label htmlFor="psw"><b style={{color: 'blue'}}>Password:</b></label>
                    <input type={isShown ? "text" : "password"}
                        defaultValue={userPassword}
                        placeholder="********"
                        onChange={handleChangeUserPassword} />
                    <span>
                        <label>
                            <input type="checkbox" name="showPassword" checked={isShown}
                                onChange={togglePassword} />Show password 
                        </label>
                        <button type="submit" className={Styles.button}>Sign in</button>
                    </span>
                </div>
            </form>

        </>
    )
}

export default Login