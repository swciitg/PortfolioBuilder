import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createSkill } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewSkillForm = ({ skills = [], onCreatePressed }) => {
  const [skill, setSkill] = useState("");
  const [isTyping, setIsTyping] = useState(false); // State variable to track typing
  const [isSkillFilled, setIsSkillFilled] = useState(false); // State variable to track skill field filled

  const handleInputChange = () => {
    setIsTyping(true); // Set the state to true when the user starts typing
  };

  const handleBlur = () => {
    setIsTyping(false); // Reset the state when the user clicks outside the input field
  };

  // Use useEffect to check if the skill field is filled whenever it changes
  useEffect(() => {
    if (skill) {
      setIsSkillFilled(true);
    } else {
      setIsSkillFilled(false);
    }
  }, [skill]);

  return (
    <div
      className={`border rounded ${
        isSkillFilled ? "border-green-500" : isTyping ? "border-yellow-500" : ""
      } p-3 m-2`}
    >
      <input
        className={`dark:bg-zinc-800 form-control form-control-sm mb-2 w-24 p-1 border outline-none`}
        type="text"
        placeholder="Skill"
        value={skill}
        onChange={(e) => {
          setSkill(e.target.value);
          handleInputChange();
        }}
        onBlur={handleBlur}
      />
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-full w-7 h-7 bg-green-400 text-white"
          disabled={skill === ""}
          onClick={() => {
            onCreatePressed({ skill });
            setSkill("");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (skill) => dispatch(createSkill(skill)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSkillForm);
