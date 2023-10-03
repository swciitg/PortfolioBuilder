import React from 'react';
import NewSkillForm from './NewSkillForm';
import Skill from './Skill';
import { connect } from 'react-redux';
import { removeSkill } from './actions';

const SkillsList = ({ skills = [], onRemovePressed }) => {
    return(
    <div>
        <NewSkillForm />
        <div className="container mb-3">
            {skills.map(skill => <Skill skill={skill.skill} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    skills: state.skills,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: skill => dispatch(removeSkill(skill)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsList);