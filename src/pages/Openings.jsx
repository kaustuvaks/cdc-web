import Jobc4 from '../components/Jobc4';
import {useEffect, useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function Openings(){

	const [data, setData] = useState([]);

	const stylex = {
		"min-height":"80vh"
	};

	const navigate = useNavigate();

	const handleClick = (pathx, state) => {
		// e.stopPropagation();
		console.log("working ");
        navigate(pathx, {state : state ,repplace:true});
    }

	useEffect(() => {
		fetch("http://localhost:4900/api/jobs")
		.then ((res) => res.json())
		.then((datax) => {
			setData(datax)
			console.log(datax);})
		.catch(error => console.log(error));
	}, []);

    return(
        <>
{/* 
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
			</header> */}
			<div className="container py-3">
				<div className="dropdown">
					<button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Sort by Date 
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Newest</a></li>
						<li><a className="dropdown-item" href="#">Oldest</a></li>
					</ul>
				</div>
			</div>

			
			<div className=	"container" style={ stylex }>
				<div class ="d-flex flex-column h-100px">
					{	
						
						data && data.map((elem, idx) => {
							// setCtr(idx);
							const pathTex = `/openings/job/${elem.job}`;
							return (
									<div class="row " onClick={() => handleClick(pathTex, elem)}>
										<Jobc4 branches={elem.branches} name={elem.job} key={elem._id}/>
									</div>
							);
						})
					}
				</div>
			</div>

			
			
			<footer className="bg-primary m-0 mt-5"> 
				<p className="text-center m-0">Designed and Developed by Kaustuva Kumar Sahu.</p>
			</footer>
        </>
    );
}

export default Openings;