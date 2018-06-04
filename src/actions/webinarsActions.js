import action from './index';
import {StorageItemName} from 'constants';
import {getStorageItem} from 'utils';

export const GET_WEBINARS_LIST = 'GET_WEBINARS_LIST';
export const getWebinars = () => dispatch => {
  const webinars = getStorageItem(StorageItemName.WEBINARS);

  dispatch(action(GET_WEBINARS_LIST, webinars));
};


export const ADD_WEBINAR = 'ADD_WEBINAR';
export const addWebinar = (item) => dispatch => {
  const webinars = getStorageItem(StorageItemName.WEBINARS);
  const newWebinarsList = [...webinars, item];

  localStorage.setItem('webinars', JSON.stringify(newWebinarsList));
  dispatch(action(ADD_WEBINAR, newWebinarsList));
};
