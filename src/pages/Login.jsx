import login from './login.module.css';

function Login(){

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
                        <form className="form">
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" className={`btn ${login.btnBlack}`}>Login</button>
                            <button type="submit" className="btn btn-secondary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
      </>
    );
}

export default Login;