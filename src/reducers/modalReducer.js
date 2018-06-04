import * as actions  from 'actions/modalActions';

const initialState = {
  modalType: null,
  isOpened:false
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.MODAL_SHOW: return showModal(state, action);
    case actions.MODAL_HIDE: return closeModal(state, action);
    default: {
      return state;
    }
  }
}

const showModal = (state, action) => {
  return {
    ...state,
    modalType: action.payload,
    isOpened: true
  };
};

const closeModal = state => {
  return {
    ...state,
    modalType: null,
    isOpened: false
  };
};