import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createInterest } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewInterestForm = ({ interests = [], onCreatePressed }) => {
  const [interest, setInterest] = useState("");
  const [isTyping, setIsTyping] = useState(false); // State variable to track typing
  const [isInterestFilled, setIsInterestFilled] = useState(false);

  const handleInputChange = () => {
    setIsTyping(true); // Set the state to true when the user starts typing
  };

  const handleBlur = () => {
    setIsTyping(false); // Reset the state when the user clicks outside the input field
  };

  useEffect(() => {
    if (interest) {
      setIsInterestFilled(true);
    } else {
      setIsInterestFilled(false);
    }
  }, [interest]);
  return (
    <div
      className={`border ${
        isInterestFilled
          ? "border-green-500"
          : isTyping
          ? "border-yellow-500"
          : ""
      } p-3`}
    >
      <div className="flex justify-between mb-3">
        <div className="flex gap-2 text-white text-sm items-center">
          <div className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02]">Option 1</div>
          <div className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02]">Option 2</div>
          <div className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02]">Option 3</div>
        </div>
      </div>
      <input
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-full md:w-96 border outline-none p-1 capitalize"
        type="text"
        placeholder="Describe your interests in a few words..."
        value={interest}
        onChange={(e) => {
          setInterest(e.target.value);
          handleInputChange();
        }}
        onBlur={handleBlur}
      />
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle cursor-pointer rounded-full w-7 h-7 bg-green-400 hover:bg-green-600 text-white"
        
          onClick={() => {
            if(interest === "")
            {
              toast.warning("Interest section is empty!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
              return;
            }

            onCreatePressed({ interest });
            setInterest("");
            
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  interests: state.interests,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (interest) => dispatch(createInterest(interest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewInterestForm);
