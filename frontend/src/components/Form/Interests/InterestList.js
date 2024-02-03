import React from 'react';
import NewInterestForm from './NewInterestForm';
import Interest from './Interest';
import { connect } from 'react-redux';
import { editInterest, removeInterest } from './actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InterestCard from './InterestCard';

const InterestList = ({ interests = [], onRemovePressed, onEditPressed }) => {
    return(
    <div>
        <NewInterestForm />
        <div className="container my-3">
            {interests.map(interest => <InterestCard interest={interest.interest} onRemovePressed={onRemovePressed} onEditPressed={onEditPressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    interests: state.interests,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: interest => {dispatch(removeInterest(interest))
        toast.success('Interest removed successfully', {
            position: "top-right",
            autoClose: 2000,
            closeOnClick:true
            });},
    onEditPressed: (oldInterest, newInterest) => dispatch(editInterest(oldInterest, newInterest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InterestList);