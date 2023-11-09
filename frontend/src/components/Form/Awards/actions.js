export const CREATE_AWARD = 'CREATE_AWARD';

export const createAward = award => ({
    type: CREATE_AWARD,
    payload: {award}
});

export const REMOVE_AWARD = 'REMOVE_AWARD';

export const removeAward = award => ({
    type: REMOVE_AWARD,
    payload: {award}
});

export const EDIT_AWARD = 'EDIT_AWARD';

export const editAward = (oldAward, newAward) => ({
    type: EDIT_AWARD,
    payload: {oldAward, newAward}
});
