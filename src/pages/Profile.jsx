import { useCallback, useContext, useEffect, useState } from "react";
import ListButton from "../components/ListButton";
import Home from "./Home";
import { UserAuthContext } from "../App";

export default function Profile() {

    const {user} = useContext(UserAuthContext);

    const [activeElements, setActiveElements] = useState([]);

    const toggleActive = (index) => {
        const updatedElements = [...activeElements];

        // console.log(updatedElements)
        if(updatedElements[index] !== true){
            updatedElements[index] = !updatedElements[index];
            updatedElements.forEach((ele, idx) => {
                if(idx !== index && updatedElements[idx] === true){
                    updatedElements[idx] = !updatedElements[idx];
                }
            });
        }

        setActiveElements(updatedElements)
    };

    const generalHandleClick = () =>{
        toggleActive(0);
        generalHandleRender(true);
    };
    
    const gradesHandleClick = () =>{
        toggleActive(1);
    };

    const experienceHandleClick = () =>{
        toggleActive(2);
    };

    const certificateHandleClick = () =>{
        toggleActive(3);
    };

    const generalHandleRender = (val) =>{
       
    }
    return (
        <>
            <div className="row col-lg-12">
                <div className="col-sm-3">
                    <div className="container">
                        <div id="list-example" class="list-group">
                           <ListButton name="General-Info" styleName={`list-group-item border-0 ${activeElements[0] ? 'bg-primary' : ''} `} handleClick={generalHandleClick}/>
                           <ListButton name="Grades" styleName={`list-group-item border-0 ${activeElements[1] ? 'bg-primary' : ''} `} handleClick={gradesHandleClick}/>
                           <ListButton name="Experiences" styleName={`list-group-item border-0 ${activeElements[2] ? 'bg-primary' : ''} `} handleClick={experienceHandleClick}/>
                           <ListButton name="Certificate" styleName={`list-group-item border-0 ${activeElements[3] ? 'bg-primary' : ''} `} handleClick={certificateHandleClick}/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    {
                        activeElements[0] && <Home/>
                    }
                </div>
            </div>
        </>
    );
}