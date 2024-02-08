import React from 'react';
import NewSkillForm from './NewSkillForm';
import Skill from './Skill';
import { connect } from 'react-redux';
import { editSkill, removeSkill } from './actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SkillsList = ({ skills = {}, onRemovePressed }) => {
  const selectedSkills = skills.selectedSkills;
  
  return (
    <div>
      <NewSkillForm />
      <div className="d-flex flex-wrap my-4 border p-3 rounded-sm">
        
        <div className='flex flex-wrap'>
          {selectedSkills.map((skill) => (
            <Skill key={skill.name} skill={skill} onRemovePressed={onRemovePressed} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (skill) => {
    toast.success('Skill removed successfully', {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
    });
    dispatch(removeSkill(skill))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsList);
