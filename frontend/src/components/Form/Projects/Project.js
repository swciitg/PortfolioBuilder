import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Project = ({ project, onRemovePressed }) => {
  const projectData = project.project;

  return (
    <div className="w-3/4 card dark:bg-lime-300 dark:text-black bg-light pb-1 pr-1 mb-1 shadow-md border my-2 rounded-md p-3">
      <div className="card-body ">
        <div className="flex">
          <div className="w-1/2 flex gap-2 items-center">
            <div className="col-xl-2 col-3 bg-gray-100 p-1 rounded-sm">Project Name :</div>
            <div className="col-xl-4 col-9 capitalize">{projectData.name}</div>
          </div>
          <div className="w-1/2 flex gap-2 items-center">
            <div className="col-xl-2 col-3 bg-gray-100 p-1 rounded-sm">Tech Stack :</div>
            <div className="col-xl-4 col-9 capitalize">{projectData.techStack}</div>
          </div>
        </div>
        <div className="flex gap-2 items-center my-1">
          <div className="col-2 bg-gray-100 p-1 rounded-sm">Description :</div>
          <div className="col-10">{projectData.description}</div>
        </div>
        <div className="flex gap-2 my-1 items-center">
          <div className="col-2 bg-gray-100 p-1 rounded-sm">Website Link :</div>
          <div className="col-4">{projectData.websiteLink}</div>
          
        </div>
        <div className="flex gap-2 my-1 items-center">
          <div className="col-2 bg-gray-100 p-1 rounded-sm">GitHub Link :</div>
          <div className="col-4">{projectData.githubLink}</div>
        </div>
        <div className="flex gap-2 my-1 items-center">
          <div className="col-2 bg-gray-100 p-1 rounded-sm">Project Timeline :</div>
          <div className="col-4">{projectData.timeline}</div>
          
        </div>
        <div className="flex gap-2 my-1 items-center">
          <div className="col-2 bg-gray-100 p-1 rounded-sm">Guided by Professor :</div>
          <div className="col-4">
            {projectData.guidedByProfessor ? "Yes" : "No"}
          </div>
        </div>
        {/* Professor's Name */}
        {projectData.guidedByProfessor && (
          <div className="flex items-center">
            <div className="">Professor's Name:</div>
            <div className="">{projectData.professorName}</div>
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
      <div className="text-right flex justify-end">
        <button
          className="p-2 w-8 h-8 flex items-center justify-center bg-red-400 text-white rounded-full"
          onClick={() => onRemovePressed(project)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>
  );
};

export default Project;
