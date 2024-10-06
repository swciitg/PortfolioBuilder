import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { connect } from "react-redux";
import { createExperience } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewExperienceForm = ({ experiences = [], onCreatePressed }) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [desc, setDesc] = useState("");
  const [start, setStartDate] = useState("");
  const [end, setEndDate] = useState("");
  const [presentJob, setPresentJob] = useState(false);
  const [endDateEnabled, setEndDateEnabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false); // State variable to track typing
  const [allFieldsFilled, setAllFieldsFilled] = useState(0); // State variable to track all fields filled

  const handleInputChange = () => {
    setIsTyping(true); // Set the state to true when the user starts typing
  };

  const handleBlur = () => {
    setIsTyping(false); // Reset the state when the user clicks outside the input field
  };

  // Use useEffect to check if all fields are filled whenever any input changes
  useEffect(() => {
    if (position && company && desc && start && (end || presentJob)) {
      setAllFieldsFilled(5); //if all 5 five fields are filled
    } else if (position || company || desc || start || end || presentJob) {
      setAllFieldsFilled(1); //checking if any one of them is filled but not all
    } else if (!position && !company && !desc && !start && !end) {
      setAllFieldsFilled(0); //if all of them is cleared again then no colors
    } else {
      setAllFieldsFilled(0); // if none is filled
    }
  }, [position, company, desc, start, end, presentJob]);

  return (
    <div
      className={`border flex flex-col ${
        allFieldsFilled === 5
          ? "border-green-500"
          : allFieldsFilled === 0
          ? ""
          : "border-yellow-500"
      } p-3`}
    >

      <input       
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 w-1/2 rounded-sm text-sm capitalize outline-none"
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => {
          setPosition(e.target.value);
          handleInputChange();
        }}
        onBlur={handleBlur}
      />
      <input
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 w-1/2 rounded-sm text-sm capitalize outline-none"
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
          handleInputChange();
        }}
        onBlur={handleBlur}
      />
      <textarea
        className="dark:bg-zinc-800 w-4/5 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-none"
        placeholder="Role description"
        rows="4"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
          handleInputChange();
        }}
        onBlur={handleBlur}
      />
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <div className="dark:bg-zinc-800 col p-1 text-sm flex items-center justify-center border w-40 rounded-sm">
          <input
            type="date"
            className="dark:bg-zinc-800 outline-none p-1"
            placeholder="Start Date"
            onChange={(e) =>
              setStartDate(moment(e.target.value).format("MM YYYY"))
            }
          />
        </div>
        <div className="dark:bg-zinc-800 col p-1 text-sm flex items-center justify-center border w-40 rounded-sm">
          <input
            type="date"
            className="dark:bg-zinc-800 outline-none p-1"
            placeholder="End Date"
            onChange={(e) =>
              setEndDate(moment(e.target.value).format("MM YYYY"))
            }
            enabled={endDateEnabled}
          />
        </div>
        <div className="col">
          <div className="form-check border p-1 flex justify-center items-center w-24 rounded-sm">
            <input
              className="dark:bg-zinc-800"
              type="checkbox"
              value={presentJob}
              id="presentJob"
              onChange={(e) => {
                setPresentJob(e.target.checked);
                setEndDateEnabled(!endDateEnabled);
              }}
              // disabled={end !== ''}
            />
            <label
              className=" form-check-label flex justify-center items-center px-1"
              htmlFor="presentJob"
            >
              Present
            </label>
          </div>
        </div>
      </div>

      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle cursor-pointer rounded-full w-7 h-7 bg-green-400 hover:bg-green-600 text-white"
          
          onClick={() => {
            if(position === "" ||
            company === "" ||
            desc === "" ||
            start === "" ||
            (end === "" && !presentJob))
            {
              toast.warning("All fields in Experience section not filled!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
              return;
            }
            
            onCreatePressed({
              position,
              company,
              desc,
              start,
              end,
              presentJob,
            });
            setPosition("");
            setCompany("");
            setDesc("");
            setPresentJob(false);

            toast.success("Success", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
        
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  experiences: state.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (experience) => dispatch(createExperience(experience)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExperienceForm);
