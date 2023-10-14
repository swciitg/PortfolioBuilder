import { CREATE_PROJECT, REMOVE_PROJECT,CHANGE_DESIGN } from "./action";

const projects = (state = { selectedDesign: "design1", items: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROJECT: {
      const { project } = payload;
      const newProject = {
        project,
      };
      return {
        ...state,
        items: [...state.items, newProject],
      };
    }
    case REMOVE_PROJECT: {
      const { project } = payload;
      return {
        ...state,
        items: state.items.filter((obj) => obj.project.project.name !== project.project.name),
      };
    }
    case CHANGE_DESIGN: {
      const { projectDesign } = payload;
      return {
        ...state,
        selectedDesign: projectDesign,
      };
    }

    default:
      return state;
  }
};

export default projects;
