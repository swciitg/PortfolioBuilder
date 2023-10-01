import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Skill = ({ skill, onRemovePressed}) =>{
    return(    
        <div className="card bg-light p-2 pr-1 mb-1">
            <div className="row">
                <div className="col-lg-10"> {skill.skill} </div>
                <div className="col-lg-2 text-right">
                    <button 
                        className="bg-red-500 text-white p-2 rounded-full"
                        onClick={() => onRemovePressed(skill)}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
            </div>   
       </div>
    )
}

export default Skill;
