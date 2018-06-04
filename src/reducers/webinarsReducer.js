import * as actions  from 'actions/webinarsActions';

const initialState = {
  list: []
};

export default function webinarsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_WEBINARS_LIST: return getWebinars(state, action);
    case actions.ADD_WEBINAR: return addWebinar(state, action);
    default: {
      return state;
    }
  }
}

const getWebinars = (state, action) => {
  return {
    ...state,
    list: action.payload
  };
};

const addWebinar = (state, action) => {
  return {
    ...state,
    list: action.payload
  };
};