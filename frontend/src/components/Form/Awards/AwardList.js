import React from 'react';
import NewAwardForm from './NewAwardForm';
import { connect } from 'react-redux';
import { editAward, removeAward } from './actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AwardCard from './AwardCard';

const AwardList = ({ awards = [], onRemovePressed, onEditPressed }) => {
    return(
    <div>
        <NewAwardForm />
        <div className="my-4">
            {awards.map(award => <AwardCard award={award.award} onRemovePressed={onRemovePressed} onEditPressed={onEditPressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    awards: state.awards,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: award => {
        toast.success('Award removed successfully', {
            position: "top-right",
            autoClose: 2000,
            closeOnClick:true
            });
        dispatch(removeAward(award))},
    onEditPressed: (award, editedAward) => dispatch(editAward(award, editedAward)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AwardList);