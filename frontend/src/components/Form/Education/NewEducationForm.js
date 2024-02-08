import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
import { connect } from "react-redux";
import { createEducation } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewEducationForm = ({ educations = [], onCreatePressed }) => {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [gpa, setGpa] = useState("");
  const [branch, setBranch] = useState("");
  const [start, setStartDate] = useState("");
  const [end, setEndDate] = useState("");
  const [presentUniversity, setPresentUniversity] = useState(false);
  const [endDateEnabled, setEndDateEnabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false); // State variable to track typing
  const [allFieldsFilled, setAllFieldsFilled] = useState(0); // State variable to track all fields filled

  useEffect(() => {
    if (university && degree && branch && gpa && start && (end || presentUniversity)) {
      setAllFieldsFilled(6); //if all 6 five fields are filled
    } else if (
      university ||
      degree ||
      gpa ||
      branch ||
      start ||
      end ||
      presentUniversity
    ) {
      setAllFieldsFilled(1); //checking if any one of them is filled but not all
    } else if (!university && !branch && !degree && !gpa && !start && !end) {
      setAllFieldsFilled(0); //if all of them is cleared again then no colors
    } else {
      setAllFieldsFilled(0); // if none is filled
    }
  }, [university, degree, gpa, branch, start, end, presentUniversity]);

  const handleBlur = () => {
    setIsTyping(false); // Reset the state when the user clicks outside the input field
  };

  return (
    <div
      className={`border ${
        allFieldsFilled === 6
          ? "border-green-500"
          : allFieldsFilled === 0
          ? ""
          : "border-yellow-500"
      } p-4`}
    >
     
      <input
        className="w-3/4 dark:bg-zinc-800 form-control form-control-sm mb-2 border p-1 rounded-sm text-sm capitalize outline-none"
        type="text"
        placeholder="University/College"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
      />
       <div>
        <input
          className="w-1/2 dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-l-sm text-sm capitalize outline-none"
          type="text"
          placeholder="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <input
          className="w-1/4 dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-r-sm text-sm capitalize outline-none"
          type="number"
          placeholder="GPA"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
      </div>
      <input
          className="w-3/4 dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-none"
          type="text"
          placeholder="Branch/Department"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div className="dark:bg-zinc-800 col my-2 p-1 border rounded-sm w-40 text-sm">
          <input
            type="date"
            className="dark:bg-zinc-800 outline-none p-1"
            placeholder="start Date"
            onChange={(e) =>
              setStartDate(moment(e.target.value).format("MM YYYY"))
            }
          />
        </div>
        <div className="dark:bg-zinc-800 col p-1 border rounded-sm w-40 text-sm">
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
          <div className="form-check border p-1 flex justify-center items-center w-24 text-sm">
            <input
              className="form-check-input px-1"
              id="presentUniversity"
              type="checkbox"
              value={presentUniversity}
              onChange={(e) => {
                setPresentUniversity(e.target.checked);
                setEndDateEnabled(!endDateEnabled);
              }}
              // disabled={end !== ''}
            />
            <label
              className="form-check-label px-1"
              htmlFor="presentUniversity"
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
            if(university === "" ||
            degree === "" ||
            gpa === "" ||
            start === "" ||
            branch === "" ||
            (end === "" && !presentUniversity))
            {
              toast.warning("All fields in Education section not filled!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
              return;
            }

            onCreatePressed({
              university,
              degree,
              gpa,
              branch,
              start,
              end,
              presentUniversity,
            });
            setUniversity("");
            setDegree("");
            setBranch("");
            setGpa("");
            setPresentUniversity(false);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  experiences: state.educations,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (education) => dispatch(createEducation(education)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEducationForm);
