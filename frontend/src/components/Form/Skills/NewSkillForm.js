import React, { useState } from "react";
import { connect } from "react-redux";
import {selectSkill } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define some sample skills

const NewSkillForm = ({ onCreatePressed, onSelectSkill,availableSkills}) => {
  const [selectedSkillName, setSelectedSkillName] = useState("");

  const handleSkillChange = (e) => {
    const selectedName = e.target.value;
    setSelectedSkillName(selectedName);
  };

  const handleCreateSkill = () => {
    if(!selectedSkillName)
    {
      toast.warning("No skill selected!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

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
    <div className={`border p-4`}>
      
      <select
        className={`form-select form-select-sm mb-2 w-full md:w-60 p-1 border dark:bg-zinc-800 form-control form-control-sm py-1 px-2 rounded-sm text-sm capitalize outline-none`}
        value={selectedSkillName}
        onChange={handleSkillChange}
      >
        <option value="" className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-none ">Select a Skill</option>
        {availableSkills.map((skill) => (
          <option key={skill.name} value={skill.name}>
            {skill.name}
          </option>
        ))}
      </select>
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle cursor-pointer rounded-full w-7 h-7 bg-green-400 hover:bg-green-600 text-white"
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
    dispatch(selectSkill(skill));
  },});

export default connect(mapStateToProps, mapDispatchToProps)(NewSkillForm);