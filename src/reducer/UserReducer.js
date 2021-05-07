export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'START_FETCH':
      return { ...state, user: [], loading: true, error: '', job: [] };
    case 'SUCCESS_FETCH':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'ERROR_FETCH':
      return { ...state, loading: false, error: action.payload };
    case 'SUCCESS_JOB_FETCH':
      return {
        ...state,
        loading: false,
        job: action.payload,
      };
    default:
      return state;
  }
};
