import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS, FETCH_DATA_START } from '../constants/actionTypes';
import { fetch } from '../helpers/rest';

export const fetchCrud = (endpoint) => async (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  try {
    const res = await fetch(endpoint);
    dispatch({
      type: FETCH_DATA_SUCCESS,
      data: res.data,
      entity: endpoint,
      isError: false,
    });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAIL, isError: true, error });
  }
};

export const smth = () => {
  //
};
