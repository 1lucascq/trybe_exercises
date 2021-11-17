export const CHANGE_PERSONAL_DATA = 'CHANGE_PERSONAL_DATA';
export const CHANGE_PROFESSIONAL_DATA = 'CHANGE_PROFISSIONAL_DATA';

export const changePersonalData = (payload) => ({
  type: CHANGE_PERSONAL_DATA,
  payload,
});

export const changeProfessionalData = (payload) => ({
  type: CHANGE_PROFESSIONAL_DATA,
  payload,
});
