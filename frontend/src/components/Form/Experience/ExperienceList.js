import React from 'react';
import NewExperienceForm from './NewExperienceForm';
import Experience from './Experience';
import { connect, useSelector } from 'react-redux';
import { removeExperience } from './actions';

const ExperienceList = ({ experiences = [], onRemovePressed }) => {
    
    return(
    <div>
        <NewExperienceForm />
        <div className="container mb-3">
            {experiences.map(experience => <Experience experience={experience.experience} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    experiences: state.experiences,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: experience => dispatch(removeExperience(experience)),
});
export default connect(mapStateToProps,mapDispatchToProps)(ExperienceList);