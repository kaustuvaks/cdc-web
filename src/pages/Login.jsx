function Login(){


    return(
        <>
            <div>
                <div className="p-5 bg-image" style={{backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",height: "200px"}}></div>
            
                
                <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "-100px",background: "hsla(0, 0%, 100%, 0.8)",backdropFilter: "blur(30px)"}}>
                    <div className="card-body py-5 px-md-5">
                    
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-7">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form className="needs-validation" novalidate action="RegisterServlet" method="post">
                                
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline text-left">
                                                <label className="form-label" for="FirstName">First name</label>
                                                <input type="text" id="FisrstName" className="form-control" name="userFirstName" required/>
                                                <div className="valid-feedback">Nice! You got this one!</div>
                                                <div className="invalid-feedback">Name can't be numeric.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline text-left">
                                                <label className="form-label" for="LastName">Last name</label>
                                                <input type="text" id="LastName" className="form-control" name="userLastName" required/>
                                                <div className="valid-feedback">Nice! You got this one!</div>
                                                <div className="invalid-feedback">Name can't be numeric.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 text-left">
                                        <label className="form-label" for="Email">Email address</label>
                                        <input type="email" id="Email" className="form-control" name="userEmail" required/>
                                        <div className="valid-feedback">Nice! You got this one!</div>
                                        <div className="invalid-feedback">Invalid email.</div>
                                    </div>
                                    
                                    {/* Password */}
                                    <div className="form-outline mb-4 text-left">
                                        <label className="form-label" for="Password">Password</label>
                                        <input type="password" name="userPassword" id="Password" className="form-control" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$" autocomplete="no"/>
                                        <div className="valid-feedback">Nice! You got this one!</div>
                                        <div className="invalid-feedback">At least 6 chars: 1 uppercase, 1 lowercase and numeric</div>
                                    </div>
                                    
                                   {/* Check Box */}
                                    <div className="form-check d-flex justify-content-left mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Subscribe" name="subscribe" checked />
                                        <label className="form-check-label" for="Subscribe">Subscribe to our newsletter</label>
                                    </div>
        
                                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;