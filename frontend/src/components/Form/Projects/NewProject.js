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
    professorName: "", // New field for professor's name
    isClubProject: false, // New field for club project
    clubName: "", // New field for club name
    isSelfProject: false,
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
      professorName: "", // New field for professor's name
      isClubProject: false, // New field for club project
      clubName: "", // New field for club name
      isSelfProject: false,
    });
  };

  return (
    <div className="border rounded p-3 m-2 ">
      <div className="p-1">
        <input
          type="text"
          className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-60 border p-1 outline-gray-200"
          name="name"
          placeholder="Proect Name"
          value={projectData.name}
          onChange={handleChange}
        />
        <textarea
          className="dark:bg-zinc-800 w-4/5 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
          name="description"
          placeholder="Project Description"
          value={projectData.description}
          onChange={handleChange}
        />
        <div className="gap-y-3">
          <input
            type="text"
            className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-60 border p-1 outline-gray-200"
            name="image"
            placeholder="Project Image URL"
            value={projectData.image}
            onChange={handleChange}
          />
          <input
            type="text"
            className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-60 border p-1 outline-gray-200"
            name="techStack"
            placeholder="Tech Stack"
            value={projectData.techStack}
            onChange={handleChange}
          />
          <input
            type="text"
            className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-60 border p-1 outline-gray-200"
            name="websiteLink"
            placeholder="Website Link"
            value={projectData.websiteLink}
            onChange={handleChange}
          />
          <input
            type="text"
            className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-60 border p-1 outline-gray-200"
            name="githubLink"
            placeholder="GitHub Link"
            value={projectData.githubLink}
            onChange={handleChange}
          />
          <input
            type="text"
            className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-60 border p-1 outline-gray-200"
            name="timeline"
            placeholder="Project Timeline"
            value={projectData.timeline}
            onChange={handleChange}
          />
        </div>
      </div>
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
      {projectData.guidedByProfessor && (
        <input
          type="text"
          className="form-control mb-2"
          name="professorName"
          placeholder="Professor's Name"
          value={projectData.professorName}
          onChange={handleChange}
        />
      )}

      {/* Club Project Checkbox */}
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="isClubProject"
          checked={projectData.isClubProject}
          onChange={handleChange}
        />
        <label className="form-check-label">Club Project</label>
      </div>
      {/* Club Name */}
      {projectData.isClubProject && (
        <input
          type="text"
          className="form-control mb-2"
          name="clubName"
          placeholder="Club Name"
          value={projectData.clubName}
          onChange={handleChange}
        />
      )}
      {/* Self-Project Checkbox */}
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="isSelfProject"
          checked={projectData.isSelfProject}
          onChange={handleChange}
        />
        <label className="form-check-label">Self-Project</label>
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
