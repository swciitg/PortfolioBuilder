import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject, changeDesign } from "./action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewProjectForm = ({ onCreatePressed,onChangeDesign }) => {
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
    selectedDesign:"design1"
  });
  const [selectedDesign, setSelectedDesign] = useState("design1"); 

  const handleDesignSelection = (design) => {
    setSelectedDesign(design);
    onChangeDesign(design);
    console.log(design);
  };

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
      selectedDesign:""
    });
  };

  return (
    <div className="border rounded p-3 m-2">
      <div className="row">
        <div className="col-12 text-center">
          <button
            className={`btn ${selectedDesign === "design1" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => handleDesignSelection("design1")}
          >
            Design 1
          </button>
          <button
            className={`btn ${selectedDesign === "design2" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => handleDesignSelection("design2")}
          >
            Design 2
          </button>
        </div>
      </div>
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="name"
        placeholder="Project Name"
        value={projectData.name}
        onChange={handleChange}
      />
      <textarea
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="description"
        placeholder="Project Description"
        value={projectData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="image"
        placeholder="Project Image URL"
        value={projectData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="techStack"
        placeholder="Tech Stack"
        value={projectData.techStack}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="websiteLink"
        placeholder="Website Link"
        value={projectData.websiteLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="githubLink"
        placeholder="GitHub Link"
        value={projectData.githubLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="timeline"
        placeholder="Project Timeline"
        value={projectData.timeline}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
          name="guidedByProfessor"
          checked={projectData.guidedByProfessor}
          onChange={handleChange}
        />
        <label className="form-check-label">Guided by Professor</label>
      </div>
      {projectData.guidedByProfessor && (
       <input
       type="text"
       className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
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
          className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
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
          className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
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
          className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
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
  onChangeDesign:(projectDesign)=>dispatch(changeDesign(projectDesign))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);