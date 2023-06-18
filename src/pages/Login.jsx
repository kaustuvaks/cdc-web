import login from './login.module.css';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { UserAuthContext } from '../App';

function Login(){

    const {user, setUser} = useContext(UserAuthContext);

    const navigate = useNavigate();


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[submitted, setSubmitted] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const  handleSubmit = async (e) => {
        setSubmitted(true);
        //console.log("inside on login submit");
        e.preventDefault();
        try {
            await axios.post('http://localhost:4900/login-form', { email, password }).then((response) => {


                console.log(response.data);
                if(response.data.value === "notexists"){
                    
                }else if(response.data.value === "exists"){
                    setUser(response.data.users)
                    navigate("/", {state:response.data.users})
                }
            });
            
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <div className={login.sidenav}>
                <div className={login.loginMainText}>
                    <h2>Application<br/> Login Page</h2>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div className={login.main}>
                <div className="col-md-6 col-sm-12">
                    <div className={login.loginForm}>
                        <form className="form" method="post" action="/login-form">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="email" onChange={handleEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={handlePassword}/>
                            </div>
                            <button type="submit" className={`btn ${login.btnBlack}`} onClick={handleSubmit}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
      </>
    );
}

export default Login;