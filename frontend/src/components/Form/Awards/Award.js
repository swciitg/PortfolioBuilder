import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Award = ({ award, onRemovePressed }) => {
    return (
        <div className="card card dark:bg-red-300 dark:text-black card bg-light p-2 pr-1 mb-1">
            <div className="row">
                <div className="col"> {award.award} </div>
                <div className="col text-right">
                    <button
                        className="bg-red-500 text-white p-2 rounded-full"
                        onClick={() => onRemovePressed(award)}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Award;
