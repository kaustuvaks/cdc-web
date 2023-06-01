import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Openings from './pages/Openings';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Job from './pages/Job';
import Signup from './pages/Signup'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
			<Router>
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
					<Route exact path="/" Component={App}/>
					<Route path="/openings" element={<Openings />} >
						
					<Route path="openings/job/:jobName" element={<Job />} />
					</Route>
					

					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <header class="p-3 mb-3 border-bottom">
	<div class="container">
	<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
		<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
		<svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
		</a>

		<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
		<li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
		<li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
		<li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
		<li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
		</ul>

		
	</div>
	</div>
</header> */}
