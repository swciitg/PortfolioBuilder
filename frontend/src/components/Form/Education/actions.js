export const CREATE_EDUCATION = 'CREATE_EDUCATION';

export const createEducation = education => ({
    type: CREATE_EDUCATION,
    payload: {education}
});

export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';

export const removeEducation = education => ({
    type: REMOVE_EDUCATION,
    payload: {education}
});

export const EDIT_EDUCATION = 'EDIT_EDUCATION';

export const editEducation = (oldEducation, newEducation) => ({
    type: EDIT_EDUCATION,
    payload: {oldEducation, newEducation}
});