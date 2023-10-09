
export const REMOVE_SKILL = 'REMOVE_SKILL';

export const removeSkill = skill => ({
    type: REMOVE_SKILL,
    payload: {skill}
});


export const SELECT_SKILL='SELECT_SKILL'

export const selectSkill = (skill) => ({
    type: SELECT_SKILL,
    payload: { skill },
  });

export const EDIT_SKILL = 'EDIT_SKILL';

export const editSkill = (oldSkill, newSkill) => ({
    type: EDIT_SKILL,
    payload: { oldSkill, newSkill },
})

