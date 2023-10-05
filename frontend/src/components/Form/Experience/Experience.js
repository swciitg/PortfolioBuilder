import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Experience = ({ experience, onRemovePressed }) => {
    return (
        <div className="dark:bg-amber-300 dark:text-black bg-white p-1 pr-1 mb-1 shadow-sm">
            <div className="p-2">
                <div className="flex">
                    <div className="w-1/6">Role:</div>
                    <div className="w-5/6">{experience.position}</div>
                </div>
                <div className="flex">
                    <div className="w-1/6">Company:</div>
                    <div className="w-5/6">{experience.company}</div>
                </div>
                <div className="flex">
                    <div className="w-1/6">Start:</div>
                    <div className="w-5/6">{experience.start}</div>
                </div>
                <div className="flex">
                    <div className="w-1/6">End:</div>
                    <div className="w-5/6">
                        {experience.end ? experience.end : experience.presentJob ? "Present" : ""}
                    </div>
                </div>
                <div className="flex">
                    <div>Description:  {experience.desc}</div>
                    {/* <div className="w-2/3">{experience.desc}</div> */}
                </div>
            </div>
            <div className="text-right">
                <button
                    className="bg-red-500 text-white p-2 rounded-full"
                    onClick={() => onRemovePressed(experience)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>

    )
}

export default Experience;
