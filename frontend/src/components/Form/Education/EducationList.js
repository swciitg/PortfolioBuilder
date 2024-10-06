import React from 'react';
import NewEducationForm from './NewEducationForm';
import { connect } from 'react-redux';
import { editEducation, removeEducation } from './actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EducationCard from './EducationCard';

const EducationList = ({ educations = [], onRemovePressed, onEditPressed }) => {
    return (
        <div>
            <NewEducationForm />
            <div className="my-6">
                {educations.map(education => <EducationCard education={education.education} onRemovePressed={onRemovePressed} onEditPressed={onEditPressed}/>)}
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
            closeOnClick: true
        });
        dispatch(removeEducation(education))
    },
    onEditPressed: (oldeducation, newEducation) => {
        dispatch(editEducation(oldeducation, newEducation))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationList);