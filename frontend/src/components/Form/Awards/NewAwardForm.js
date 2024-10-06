import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createAward } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewAwardForm = ({ awards = [], onCreatePressed }) => {
  const [award, setAward] = useState("");
  const [isTyping, setIsTyping] = useState(false); // State variable to track typing
  const [isAwardsFilled, setIsAwardsFilled] = useState(false);

  const handleInputChange = () => {
    setIsTyping(true); // Set the state to true when the user starts typing
  };

  const handleBlur = () => {
    setIsTyping(false); // Reset the state when the user clicks outside the input field
  };

  // Use useEffect to check if the skill field is filled whenever it changes
  useEffect(() => {
    if (award) {
      setIsAwardsFilled(true);
    } else {
      setIsAwardsFilled(false);
    }
  }, [award]);

  return (
    <div
      className={`border ${
        isAwardsFilled
          ? "border-green-500"
          : isTyping
          ? "border-yellow-500"
          : ""
      } p-3`}
    >
      <input
        className="dark:bg-zinc-800 form-control form-control-sm mt-4 mb-2 w-full md:w-96 border p-1 outline-none"
        type="text"
        placeholder="Award/Achievement/Certification"
        value={award}
        onChange={(e) => {
          setAward(e.target.value);
          handleInputChange();
        }}
        onBlur={handleBlur}
      />
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle cursor-pointer rounded-full w-7 h-7 bg-green-400 hover:bg-green-600 text-white"
        
          onClick={() => {
            if(award === "")
            {
              toast.warning("Awards section can't be empty!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
              return;
            }

            onCreatePressed({ award });
            setAward("");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  awards: state.awards,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (award) => dispatch(createAward(award)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewAwardForm);
