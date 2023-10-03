import React, { useState } from "react";
import { connect } from "react-redux";
import { createAward } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewAwardForm = ({ awards=[], onCreatePressed }) =>{

    const [award, setAward] = useState('');

    return(
    <div className="border rounded bg-light p-3 m-2">
            <input 
                className="form-control form-control-sm mb-2 w-96 border p-1 outline-gray-200"
                type="text"
                placeholder="Award/Achievement/Certification"
                value={award}
                onChange={e => setAward(e.target.value)}
            />          
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle rounded-full w-7 h-7 bg-green-400 text-white"
                disabled={award === ''}
                onClick={()=>{
                    toast.success('Award added successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick:true
                        });
                    onCreatePressed({award});
                    setAward('');
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    awards: state.awards,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: award => dispatch(createAward(award)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewAwardForm);
