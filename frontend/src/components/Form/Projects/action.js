export const CREATE_PROJECT = 'CREATE_PROJECT';


export const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: { project },
});

export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  payload: { project },
});

export const CHANGE_DESIGN = 'CHANGE_DESIGN';


export const changeDesign = (projectDesign) => ({
  type: CHANGE_DESIGN,
  payload: { projectDesign },
});
