import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from '../constants/actionTypes';

const initialState = { isError: false, error: '' };

const newsReducer = (state = initialState, {
  type, error, isError, data, entity,
}) => {
  switch (type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        [entity]: data,
        error: '',
        isError: false,
      };
    case FETCH_DATA_FAIL:
      return { ...state, error, isError };
    default:
      return state;
  }
};

export default newsReducer;
