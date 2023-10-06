import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "./action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewProjectForm = ({ onCreatePressed }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    image: "",
    techStack: "",
    websiteLink: "",
    githubLink: "",
    timeline: "",
    guidedByProfessor: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData({
      ...projectData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    // Create a new project object and dispatch the action
    const newProject = { project: projectData };
    onCreatePressed(newProject);

    // Clear the form fields
    setProjectData({
      name: "",
      description: "",
      image: "",
      techStack: "",
      websiteLink: "",
      githubLink: "",
      timeline: "",
      guidedByProfessor: false,
    });
  };

  return (
    <div className="border rounded p-3 m-2">
      <input
        type="text"
        className="form-control mb-2"
        name="name"
        placeholder="Project Name"
        value={projectData.name}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        name="description"
        placeholder="Project Description"
        value={projectData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="image"
        placeholder="Project Image URL"
        value={projectData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="techStack"
        placeholder="Tech Stack"
        value={projectData.techStack}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="websiteLink"
        placeholder="Website Link"
        value={projectData.websiteLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="githubLink"
        placeholder="GitHub Link"
        value={projectData.githubLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="timeline"
        placeholder="Project Timeline"
        value={projectData.timeline}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="guidedByProfessor"
          checked={projectData.guidedByProfessor}
          onChange={handleChange}
        />
        <label className="form-check-label">Guided by Professor</label>
      </div>
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle"
          onClick={handleSubmit}
          disabled={!projectData.name || !projectData.description}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (project) => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);
