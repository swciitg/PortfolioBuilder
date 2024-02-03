import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Skill = ({ skill, onRemovePressed }) => {
  return (
    <div className="w-fit flex items-center px-1 m-2 bg-gray-100 border">
      <div
        className="py-2 pl-1 pr-3"
      >
        {skill.image && (
          <div className="flex items-center gap-1">
            <img
            className="w-8 h-8"
              src={skill.url}
              alt={skill.name}
            />
            
          <span className="text-sm px-1">
            {skill.name}
          </span>
          
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center"
          onClick={() => onRemovePressed(skill)}
        >
      
        <FontAwesomeIcon icon={faMinus} />
      </button>
      </div>
    </div>
  );
};

export default Skill;
