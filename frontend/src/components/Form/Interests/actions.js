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

export const EDIT_INTEREST = 'EDIT_INTEREST';

export const editInterest = (oldInterest, newInterest) => ({
    type: EDIT_INTEREST,
    payload: {oldInterest, newInterest}
});
