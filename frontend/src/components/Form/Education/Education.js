import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Education = ({ education, onRemovePressed }) => {
  return (
    <div className="card bg-light p-3 pb-1 pr-1 mb-1 small"> // adding padding for text
      <div className="card-body">
        <div className="row">
          <div className="col-xl-2 col-3">University: </div>
          <div className="col-xl-4 col-9">{education.university}</div>
          <div className="col-xl-2 col-3">Degree: </div>
          <div className="col-xl-4 col-9">{education.degree}</div>
        </div>
        <div className="row">
          <div className="col-2">Start: </div>
          <div className="col-4">{education.start}</div>
          <div className="col-2">End: </div>
          <div className="col-4">{education.end ? education.end : education.presentUniversity ? "Present" : ""}</div>
        </div>
        <div className="row">
          <div className="col-sm-2">GPA:</div>
          <div className="col-sm-10">{education.gpa}</div>
        </div>
      </div>
      <div className="text-right">
        <button
          className="bg-red-500 text-white p-2 rounded-full" // adding button color
          onClick={() => onRemovePressed(education)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>
  )
}

export default Education;
