export const CREATE_SKILL = 'CREATE_SKILL';

export const createSkill = skill => ({
    type: CREATE_SKILL,
    payload: {skill}
});

export const REMOVE_SKILL = 'REMOVE_SKILL';

export const removeSkill = skill => ({
    type: REMOVE_SKILL,
    payload: {skill}
});
