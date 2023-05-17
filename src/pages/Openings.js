import Jobc4 from '../components/Jobc4';
import {useEffect, useState} from 'react';

function Openings(){

	const [data, setData] = useState([]);
	const [ctr, setCtr] = useState(0);

	const stylex = {
		"min-height":"80vh"
	};

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
			<div class="container py-3">
				<div class="dropdown">
					<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Sort by Date 
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Newest</a></li>
						<li><a class="dropdown-item" href="#">Oldest</a></li>
					</ul>
				</div>
			</div>

			<div class=	"container" style={ stylex }>
				<div class ="row">
					{	
						data && data.map((elem, idx) => {
							// setCtr(idx);
							return (<Jobc4 branches={elem.branches} name={elem.job}/>);
						})
					}
				</div>
			</div>	

			<footer class="bg-primary m-0 mt-5"> 
				<p class="text-center m-0">Designed and Developed by Kaustuva Kumar Sahu.</p>
			</footer>
        </>
    );
}

export default Openings;