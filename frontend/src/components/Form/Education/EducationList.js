import React from 'react';
import NewEducationForm from './NewEducationForm';
import Education from './Education';
import { connect } from 'react-redux';
import { removeEducation } from './actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EducationList = ({ educations = [], onRemovePressed }) => {
    return(
    <div>
        <NewEducationForm />
        <div className="container mb-3">
            {educations.map(education => <Education education={education.education} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    educations: state.educations,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: education => {
        toast.success('Education removed successfully', {
            position: "top-right",
            autoClose: 2000,
            closeOnClick:true
            });
        dispatch(removeEducation(education))},
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationList);