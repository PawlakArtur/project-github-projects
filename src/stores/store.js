import { createStore, applyMiddleware } from 'redux';
import { mainReducer } from '../reducers/mainReducer';
import getData from '../middlewares/getData';

const store = createStore(mainReducer, applyMiddleware(getData));

export default store;
