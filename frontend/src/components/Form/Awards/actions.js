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
