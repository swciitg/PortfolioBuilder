import React from "react";
import { connect } from "react-redux";
import { removeProject } from "./action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Project from "./Project";
import NewProject from "./NewProject";

const ProjectList = ({ projects = [], onRemovePressed }) => {
  return (
    <div>
      <NewProject/>
      <div className="container mb-3">
        {projects.items.map((project) => (
          <Project
            project={project.project}
            onRemovePressed={onRemovePressed}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (project) => {dispatch(removeProject(project))
    toast.success("Project removed successfully", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
    });
    
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
