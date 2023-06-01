import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup(){

    const navigate = useNavigate();

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[submit, setSubmitted] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        console.log(firstName);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

   const  handleSubmit = async (e) => {
        setSubmitted(true);
        console.log("inside on submit");
        e.preventDefault();
        try {
            await axios.post('http://localhost:4900/signup-form', { firstName, lastName, email, password }).then((response) => {
                navigate("/")
            });
            
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
            <div>
                <div className="p-5 bg-image" style={{backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",height: "200px"}}></div>
            
                
                <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "-100px",background: "hsla(0, 0%, 100%, 0.8)",backdropFilter: "blur(30px)"}}>
                    <div className="card-body py-5 px-md-5">
                    
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-7">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form method="POST" action="/signup-form">
                                
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline text-left">
                                                <label className="form-label" htmlFor="FirstName">First name</label>
                                                <input type="text" id="FisrstName" className="form-control" name="userFirstName" onChange={handleFirstName} required/>
                                                <div className="valid-feedback">Nice! You got this one!</div>
                                                <div className="invalid-feedback">Name can't be numeric.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline text-left">
                                                <label className="form-label" htmlFor="LastName">Last name</label>
                                                <input type="text" id="LastName" className="form-control" name="userLastName" onChange={handleLastName} required/>
                                                <div className="valid-feedback">Nice! You got this one!</div>
                                                <div className="invalid-feedback">Name can't be numeric.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 text-left">
                                        <label className="form-label" htmlFor="Email">Email address</label>
                                        <input type="email" id="Email" className="form-control" name="userEmail" onChange={handleEmail} required/>
                                        <div className="valid-feedback">Nice! You got this one!</div>
                                        <div className="invalid-feedback">Invalid email.</div>
                                    </div>
                                    
                                    {/* Password */}
                                    <div className="form-outline mb-4 text-left">
                                        <label className="form-label" htmlFor="Password">Password</label>
                                        <input type="password" name="userPassword" id="Password" className="form-control" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$" autoComplete="no" onChange={handlePassword}/>
                                        <div className="valid-feedback">Nice! You got this one!</div>
                                        <div className="invalid-feedback">At least 6 chars: 1 uppercase, 1 lowercase and numeric</div>
                                    </div>
                                    
                                   {/* Check Box */}
        
                                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign up</button>
    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;