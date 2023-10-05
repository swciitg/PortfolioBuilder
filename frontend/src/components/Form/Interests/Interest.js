import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Interest = ({ interest, onRemovePressed }) => {
    return (
        <div className="card card dark:bg-indigo-300 dark:text-black bg-light p-2 pr-1 mb-1">
            <div className="row">
                <div className="col-lg-10"> {interest.interest} </div>
                <div className="col-lg-2 text-right">
                    <button
                        className="bg-red-500 text-white p-2 rounded-full"
                        onClick={() => onRemovePressed(interest)}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Interest;
