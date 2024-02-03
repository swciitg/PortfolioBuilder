import React from "react";
import NewExperienceForm from "./NewExperienceForm";
import Experience from "./Experience";
import { connect, useSelector } from "react-redux";
import { editExperience, removeExperience } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExperienceCard from "./ExperienceCard";

const ExperienceList = ({ experiences = [], onRemovePressed, onEditPressed }) => {
  return (
    <div>
      <NewExperienceForm />
      <div className="my-4">
        {experiences.map((experience) => (

          // <Experience
          //   experience={experience.experience}
          //   onRemovePressed={onRemovePressed}
          // />
          <ExperienceCard experience={experience.experience} onRemovePressed={onRemovePressed} onEditPressed={onEditPressed}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  experiences: state.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (experience) => {
    toast.success("Experience removed successfully", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
    });
    dispatch(removeExperience(experience));
  },
  onEditPressed: (oldExperience, newExperience) => {
    dispatch(editExperience(oldExperience, newExperience));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceList);
