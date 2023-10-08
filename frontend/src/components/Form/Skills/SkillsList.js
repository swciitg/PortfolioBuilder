import React from 'react';
import NewSkillForm from './NewSkillForm';
import Skill from './Skill';
import { connect } from 'react-redux';
import { editSkill, removeSkill } from './actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkillCard from './SkillCard';

const SkillsList = ({ skills = [], onRemovePressed, onEditPressed  }) => {
    return (
        <div>
            <NewSkillForm />
            <div className="container mb-3">
                {skills.map(skill => <SkillCard skill={skill.skill} onEditPressed={onEditPressed} onRemovePressed={onRemovePressed}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    skills: state.skills,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: skill => {
        toast.success('Skill removed successfully', {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true
        });
        dispatch(removeSkill(skill))
    },
    onEditPressed: (oldSkill, newSkill) => {
        dispatch(editSkill(oldSkill, newSkill))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsList);