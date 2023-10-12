import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Skill = ({ skill, onRemovePressed }) => {
  return (
    <div className=" d-inline-block mr-4 mb-4 ">
      <div
        className="skill-item text-center p-3 "
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "10px",
          width: "150px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        {skill.image && (
          <div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333",
              }}
            >
              {skill.name}
            </span>
          </div>
        )}
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onRemovePressed(skill)}
      >
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Skill;
