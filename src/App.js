import './App.css';
import Post from './components/Post';
import { Routes, Route, Link } from 'react-router-dom';
import Openings from './pages/Openings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Job from './pages/Job';
import Home from './pages/Home';
import { createContext, useState } from 'react';

export const UserAuthContext = createContext();

function App() {

	// const state = {	
	// 	"studentId": Number,
	// 	"name": "",
	// 	"email": "",
	// 	"password": "",
	// 	"skills": [],
	// 	"education": {
	// 		"college": "",
	// 		"degree": "",
	// 		"graduationYear": 2023
	// 	},
	// 	"projects": [],
	// 	"internships": [{
	// 		"company": "",
	// 		"position": "",
	// 		"startYear": 1900,
	// 		"endYear": 1900
	// 	}],
	// 	"certificates": [],
	// 	"resume": "",
	// 	"jwtToken": ""
	// }

	const [user, setUser] = useState({});
	return (
		<UserAuthContext.Provider value={{user, setUser}}>
			<header>
				<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<div className="container-fluid">
						
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item"><Link to="/" class="navbar-brand">CDC-WEB</Link></li>
								<li className="nav-item">
								<Link to="/" className="nav-link active">Home</Link>
								</li>
								<li className="nav-item">
									<Link to="/openings" className="nav-link active">Openings</Link>
								</li>
								
							</ul>
							<div className="dropdown text">
								<a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
									<img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
								</a>
								<ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
									<li><a className="dropdown-item" href="#">Settings</a></li>
									<li><a className="dropdown-item" href="#">Profile</a></li>
									<li><hr className="dropdown-divider" /></li	>
									<li><a className="dropdown-item" href="#">Sign out</a></li>
								</ul>
							</div>
						</div>						
					</div>
				</nav>
			</header>

			
			<Routes>
				<Route exact path="/" element={<Home user={user}/>}/>
				<Route path="openings" element={<Openings />} />
				<Route path="openings/job/:jobName" element={<Job />} />
				

				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</UserAuthContext.Provider>

	);
}

export default App;
