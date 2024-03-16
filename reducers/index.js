// reducers/index.js
import { combineReducers } from 'redux';
import { seuReducer } from './seuReducer'; // Implemente seus reducers

const rootReducer = combineReducers({
  seuReducer, // Adicione seus reducers aqui
});

export default rootReducer;