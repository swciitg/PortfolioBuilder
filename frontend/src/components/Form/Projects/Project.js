import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Project = ({ project, onRemovePressed }) => {
  const projectData = project.project;

  return (
    <div className="card dark:bg-lime-300 dark:text-black bg-light pb-1 pr-1 mb-1 small">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-2 col-3">Project Name:</div>
          <div className="col-xl-4 col-9">{projectData.name}</div>
          <div className="col-xl-2 col-3">Tech Stack:</div>
          <div className="col-xl-4 col-9">{projectData.techStack}</div>
        </div>
        <div className="row">
          <div className="col-2">Description:</div>
          <div className="col-10">{projectData.description}</div>
        </div>
        <div className="row">
          <div className="col-2">Website Link:</div>
          <div className="col-4">{projectData.websiteLink}</div>
          <div className="col-2">GitHub Link:</div>
          <div className="col-4">{projectData.githubLink}</div>
        </div>
        <div className="row">
          <div className="col-2">Project Timeline:</div>
          <div className="col-4">{projectData.timeline}</div>
          <div className="col-2">Guided by Professor:</div>
          <div className="col-4">
            {projectData.guidedByProfessor ? "Yes" : "No"}
          </div>
        </div>
        {/* Professor's Name */}
        {projectData.guidedByProfessor && (
          <div className="row">
            <div className="col-2">Professor's Name:</div>
            <div className="col-10">{projectData.professorName}</div>
          </div>
        )}
        {/* Club Project */}
        {projectData.isClubProject && (
          <div className="row">
            <div className="col-2">Club Project:</div>
            <div className="col-10">Yes</div>
          </div>
        )}
        {/* Club Name */}
        {projectData.isClubProject && (
          <div className="row">
            <div className="col-2">Club Name:</div>
            <div className="col-10">{projectData.clubName}</div>
          </div>
        )}
        {/* Self-Project */}
        {projectData.isSelfProject && (
          <div className="row">
            <div className="col-2">Self-Project:</div>
            <div className="col-10">Yes</div>
          </div>
        )}
      </div>
      <div className="text-right">
        <button
          className="btn btn-danger btn-sm rounded-circle"
          onClick={() => onRemovePressed(project)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>
  );
};

export default Project;
