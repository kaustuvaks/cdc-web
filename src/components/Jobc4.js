import imx from '../assests/default.jpg';
function Jobc4(props){
    return(
        <>
            <div class="col-lg-4 btn">
                <div class="card text-center pt-2">
                    <img src={imx} class="card-img-top mx-auto img-rounded" alt="Card image cap" style={{height:"87px",width:"87px"}}/>
                    <div class="card-body text-align-center">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.branches}</p>
                        <p class="card-text">Date</p>
                    </div>

                    <div class="bg-success rounded-bottom">
                        <p class="card-text text-bold">Active</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jobc4;