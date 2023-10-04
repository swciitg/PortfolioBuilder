import React, { useState } from "react";

import moment from 'moment';
import { connect } from "react-redux";
import { createExperience } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewExperienceForm = ({ experiences = [], onCreatePressed }) => {

  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [desc, setDesc] = useState('');
  const [start, setStartDate] = useState('');
  const [end, setEndDate] = useState('');
  const [presentJob, setPresentJob] = useState(false);
  const [endDateEnabled, setEndDateEnabled] = useState(true);
  return (
    <div className="border rounded bg-light p-3 m-2">
      <input
        className="form-control form-control-sm mb-2 mr-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        type="text"
        placeholder="Position"
        value={position}
        onChange={e => setPosition(e.target.value)}
      />
      <input
        className="form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        type="text"
        placeholder="Company"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />
      <textarea
        className="w-4/5 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        placeholder="Role description"
        rows="4"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <div className="row mb-2">
        <div className="col mb-2 p-1 text-sm flex items-center justify-center border w-40">
          <input type="date"
            className="date outline-none p-1" // added date className to catch from changing props
            placeholder="Start Date"
            onChange={e => setStartDate(moment(e.target.value).format("MM YYYY"))}
          />
        </div>
        <div className="col mb-2 p-1 text-sm flex items-center justify-center border w-40">
          <input type="date"
            className="date outline-none p-1" // added date className to catch from changing props
            placeholder="End Date"
            onChange={e => setEndDate(moment(e.target.value).format("MM YYYY"))}
            enabled={endDateEnabled}
          />
        </div>
        <div className="col">
          <div className="form-check border p-1 flex justify-center items-center w-24">
            <input
              className=""
              type="checkbox"
              value={presentJob}
              id="presentJob"
              onChange={e => {
                setPresentJob(e.target.checked);
                setEndDateEnabled(!endDateEnabled);
              }}
            // disabled={end !== ''}
            />
            <label className="form-check-label flex justify-center items-center px-1" htmlFor="presentJob">
              Present
            </label>
          </div>
        </div>
      </div>

      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle cursor-pointer rounded-full w-7 h-7 bg-green-400 text-white"
          disabled={position === '' ||
            company === '' ||
            desc === '' ||
            start === '' ||
            (end === '' && !presentJob)
          }
          onClick={() => {
            { console.log("hello") }
            onCreatePressed({ position, company, desc, start, end, presentJob });
            setPosition('');
            setCompany('');
            setDesc('')
            setPresentJob(false);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  experiences: state.experiences,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: experience => dispatch(createExperience(experience)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExperienceForm);
