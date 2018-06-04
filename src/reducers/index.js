import {combineReducers} from 'redux';
import modalReducer from './modalReducer';
import webinarsReducer from './webinarsReducer';

export default combineReducers({
  modalState: modalReducer,
  webinars: webinarsReducer
});