import { createStore } from 'redux';
import rootReducer from '../reducers'; // Certifique-se de criar seus reducers

const store = createStore(rootReducer);

export default store;