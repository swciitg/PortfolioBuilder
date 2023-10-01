import React from 'react';
import NewInterestForm from './NewInterestForm';
import Interest from './Interest';
import { connect } from 'react-redux';
import { removeInterest } from './actions';

const InterestList = ({ interests = [], onRemovePressed }) => {
    return(
    <div>
        <NewInterestForm />
        <div className="container mb-3">
            {interests.map(interest => <Interest interest={interest.interest} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    interests: state.interests,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: interest => dispatch(removeInterest(interest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InterestList);