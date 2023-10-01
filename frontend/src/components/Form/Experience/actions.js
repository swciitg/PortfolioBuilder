export const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE';

export const createExperience = experience => ({
    type: CREATE_EXPERIENCE,
    payload: {experience}
});

export const REMOVE_EXPERIENCE = 'REMOVE_EXPERIENCE';

export const removeExperience = experience => ({
    type: REMOVE_EXPERIENCE,
    payload: {experience}
});
