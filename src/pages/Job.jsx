import {useLocation} from 'react-router-dom';
import job from '../components/job.module.css';

function Job(props) {

    const location = useLocation();
    const state = location.state;
    return(
        <>
            <div className={ job.callout }>
                <div className="text-center text-white py-5 text-bold" style={{ textTransform:"uppercase", textDecoration:"underline 6px"}}>
                    <p className="display-1 font-weight-bold">{state.job}</p>
                </div>
            </div>

            <div className='container'>
                <div className="row mt-3">
                    <div className='col-lg-8'>
                        
                    </div>
                    <div className='col-lg-4'>details</div>
                </div>
            </div>
        </>
    );
}

export default Job;