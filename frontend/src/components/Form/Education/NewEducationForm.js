import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import moment from 'moment';
import { connect } from "react-redux";
import { createEducation } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewEducationForm = ({ educations=[], onCreatePressed }) =>{

    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [gpa, setGpa] = useState('');
    const [start, setStartDate] = useState('');
    const [end, setEndDate] = useState('');
    const [presentUniversity, setPresentUniversity] = useState(false);
    const [endDateEnabled, setEndDateEnabled] = useState(true);

    return(
    <div className="border rounded bg-light p-3 m-2 mb-4">
            <input 
                className="form-control form-control-sm mb-2 mr-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
                type="text"
                placeholder="University/College"
                value={university}
                onChange={e => setUniversity(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2 mr-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
                type="text"
                placeholder="Degree"
                value={degree}
                onChange={e => setDegree(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200" 
                type="text"
                placeholder="GPA"
                value={gpa}
                onChange={e => setGpa(e.target.value)}
            />
            <div className="row ">
                <div className="col mb-2 p-1 border rounded-sm w-40">
                     <input type="date"
                        className="outline-none p-1"
                        placeholder="start Date"
                        onChange={e => setStartDate(moment(e.target.value).format("MM YYYY"))}
                    />
                </div>
                <div className="col mb-2 p-1 border rounded-sm w-40">
                     <input type="date"
                        className="outline-none p-1"
                        placeholder="End Date"
                        onChange={e => setEndDate(moment(e.target.value).format("MM YYYY"))}
                        enabled={endDateEnabled}
                    />
                </div>
                <div className="col">
                    <div className="form-check border p-1 flex justify-center items-center w-24">
                        <input 
                            className="form-check-input px-1" 
                            id="presentUniversity"
                            type="checkbox" 
                            value={presentUniversity} 
                            onChange={e => {
                                setPresentUniversity(e.target.checked);
                                setEndDateEnabled(!endDateEnabled);
                            }}
                            // disabled={end !== ''}
                        />
                        <label className="form-check-label px-1" htmlFor="presentUniversity">
                            Present
                        </label>
                    </div>
                </div>
            </div>
            
            <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle cursor-pointer rounded-full w-7 h-7 bg-green-400 text-white"
                disabled={university === '' ||
                          degree === '' ||
                          gpa === '' ||
                          start === '' ||
                          (end === '' && !presentUniversity)
                }
                onClick={()=>{
                    toast.success('Education added successfully');
                    onCreatePressed({university, degree, gpa, start, end, presentUniversity});
                    setUniversity('');
                    setDegree('');
                    setGpa('')
                    setPresentUniversity(false);
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    experiences: state.educations,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: education => dispatch(createEducation(education)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewEducationForm);