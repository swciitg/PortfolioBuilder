import React from "react";
import NewExperienceForm from "./NewExperienceForm";
import Experience from "./Experience";
import { connect, useSelector } from "react-redux";
import { removeExperience } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExperienceList = ({ experiences = [], onRemovePressed }) => {
  return (
    <div>
      <NewExperienceForm />
      <div className="container mb-3">
        {experiences.map((experience) => (
          <Experience
            experience={experience.experience}
            onRemovePressed={onRemovePressed}
          />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceList);
