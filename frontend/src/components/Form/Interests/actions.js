export const CREATE_INTEREST = 'CREATE_INTEREST';

export const createInterest = interest => ({
    type: CREATE_INTEREST,
    payload: {interest}
});

export const REMOVE_INTEREST = 'REMOVE_INTEREST';

export const removeInterest = interest => ({
    type: REMOVE_INTEREST,
    payload: {interest}
});
