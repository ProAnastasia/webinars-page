import action from './index';

export const MODAL_SHOW = 'MODAL_SHOW';
export const modalShow = (type) => action(MODAL_SHOW, type);

export const MODAL_HIDE = 'MODAL_HIDE';
export const modalHide = () => action(MODAL_HIDE);