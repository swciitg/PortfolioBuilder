import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject, changeDesign } from "./action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewProjectForm = ({ onCreatePressed, onChangeDesign }) => {
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


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData({
      ...projectData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {

    if(!projectData.name)
    {
      toast.warning("Project name not filled!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    else if(!projectData.description)
    {
      toast.warning("Project description not filled!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    else if(!projectData.techStack)
    {
      toast.warning("Tech Stacks not filled!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    else if(!projectData.githubLink)
    {
      toast.warning("Github link in project is missing!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

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
    <div className="border rounded p-4">
      <input
        type="text"
        className="mt-4 w-1/3 dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-l-sm text-sm capitalize outline-none"
        name="name"
        placeholder="Project Name"
        value={projectData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        className="ml-1 w-1/2 dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-r-sm text-sm capitalize outline-gray-200"
        name="image"
        placeholder="Project Image URL"
        value={projectData.image}
        onChange={handleChange}
      />
      <textarea
        className="w-full dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-none"
        name="description"
        placeholder="Project Description"
        value={projectData.description}
        onChange={handleChange}
      />
      
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 mr-1 rounded-l-sm text-sm capitalize outline-none"
        name="techStack"
        placeholder="Tech Stack"
        value={projectData.techStack}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 mr-1 text-sm capitalize outline-none"
        name="websiteLink"
        placeholder="Website Link"
        value={projectData.websiteLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-r-sm text-sm capitalize outline-none"
        name="githubLink"
        placeholder="GitHub Link"
        value={projectData.githubLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-none"
        name="timeline"
        placeholder="Project Timeline"
        value={projectData.timeline}
        onChange={handleChange}
      />
      <div className="form-check mb-2 flex items-center">
        <input
          type="checkbox"
          className="dark:bg-zinc-800 form-control form-control-sm border py-1 px-2 rounded-sm text-sm capitalize outline-none"
          name="guidedByProfessor"
          checked={projectData.guidedByProfessor}
          onChange={handleChange}
        />
        <label className="form-check-label mx-1">Guided by Professor</label>
      </div>
      {projectData.guidedByProfessor && (
       <input
       type="text"
       className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-none"
       name="professorName"
       placeholder="Professor's Name"
       value={projectData.professorName}
       onChange={handleChange}
     />
      )}
      
      {/* Club Project Checkbox */}
      <div className="form-check flex items-center mb-2">
        <input
          type="checkbox"
          className="dark:bg-zinc-800 form-control form-control-sm border px-2 rounded-sm text-sm capitalize outline-gray-200"
          name="isClubProject"
          checked={projectData.isClubProject}
          onChange={handleChange}
        />
        <label className="form-check-label mx-1">Club Project</label>
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
      <div className="form-check flex items-center mb-2">
        <input
          type="checkbox"
          className="dark:bg-zinc-800 form-control form-control-sm border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
          name="isSelfProject"
          checked={projectData.isSelfProject}
          onChange={handleChange}
        />
        <label className="form-check-label mx-1">Self-Project</label>
      </div>
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle cursor-pointer rounded-full w-7 h-7 bg-green-400 hover:bg-green-600 text-white"
          onClick={handleSubmit}
          
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