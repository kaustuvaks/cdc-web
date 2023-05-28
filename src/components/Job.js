import { Outlet , useLocation} from 'react-router-dom';

function Job(props) {

    const location = useLocation();
    const state = location.state;
    return(
        <>
                {
                    console.log("in job")
                }
            <div className="container py-3">
                <p>hello world</p>
                    <p>Hello {state.job}</p>
                <p>{state._id}</p>
            
            </div>
            <Outlet/>
        </>
    );
}

export default Job;