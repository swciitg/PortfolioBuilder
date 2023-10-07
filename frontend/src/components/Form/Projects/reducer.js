import { CREATE_PROJECT, REMOVE_PROJECT } from "./action";

const projects = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROJECT: {
      const { project } = payload;
      const newProject = {
        project,
      };
      return state.concat(newProject);
    }
    case REMOVE_PROJECT: {
      const { project } = payload;
      return state.filter((obj) => obj.project.project.name !== project.project.name);
    }
    default:
      return state;
  }
};

export default projects;
