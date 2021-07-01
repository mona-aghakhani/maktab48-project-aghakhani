import { ActionTypes } from "../constants/action-type";

const initialState = {
  token:"",
};

export const tokenReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};
