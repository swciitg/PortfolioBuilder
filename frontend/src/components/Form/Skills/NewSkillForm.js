import React, { useState } from "react";
import { connect } from "react-redux";
import {selectSkill } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Define some sample skills

const NewSkillForm = ({ onCreatePressed, onSelectSkill,availableSkills}) => {
  const [selectedSkillName, setSelectedSkillName] = useState("");

  const handleSkillChange = (e) => {
    const selectedName = e.target.value;
    setSelectedSkillName(selectedName);
  };

  const handleCreateSkill = () => {
    console.log("hi");
    const skillObject = availableSkills.find((skill) => skill.name === selectedSkillName);
    if (skillObject) {
      onSelectSkill(skillObject); // Dispatch the selectSkill action
    }
    else {
      // Handle the case where skillObject is not found (e.g., show an error message)
      console.error(selectedSkillName);
    }
  };

  return (
    <div className={`border rounded p-3 m-2`}>
      <select
        className={`form-select form-select-sm mb-2 w-24 p-1 border dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200`}
        value={selectedSkillName}
        onChange={handleSkillChange}
      >
        <option value="" className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200">Select a Skill</option>
        {availableSkills.map((skill) => (
          <option key={skill.name} value={skill.name}>
            {skill.name}
          </option>
        ))}
      </select>
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-full w-7 h-7 bg-green-400 text-white"
          disabled={!selectedSkillName}
          onClick={handleCreateSkill}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  availableSkills: state.skills.availableSkills,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSkill: (skill) => {
    console.log("onSelectSkill called with skill:", skill); // Add this line
    dispatch(selectSkill(skill));
  },});

export default connect(mapStateToProps, mapDispatchToProps)(NewSkillForm);