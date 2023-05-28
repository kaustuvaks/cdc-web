import Jobc4 from '../components/Jobc4';
import Job from '../components/Job';
import {useEffect, useState} from 'react';
import { Routes,Route, Link ,Outlet, useNavigate} from 'react-router-dom';
import { generatePath } from "react-router";
import Testbt from '../components/Testbt';
import NotFound from '../components/NotFound';

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