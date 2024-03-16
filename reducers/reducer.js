// reducers/seuReducer.js
const initialState = {
  suaPropriedade: null,
};

export const seuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUA_ACTION':
      return {
        ...state,
        suaPropriedade: action.payload,
      };
    default:
      return state;
  }
};