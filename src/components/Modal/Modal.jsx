import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {KeyName} from 'constants';
import ModalForm from 'components/ModalForm';

const modals = {
  'form': ModalForm
};

export default class Modal extends Component {
  constructor(props){
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown({keyCode}) {
    if (keyCode === KeyName.ESC) {
      this.props.modalHide();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    const {isOpened, modalType} = this.props;
    const ModalComponent = modals[modalType];

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="modal"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {isOpened &&
        <ModalComponent onClose={this.props.modalHide}/>
        }
      </ReactCSSTransitionGroup>
    );
  }
}

Modal.propTypes = {
  modalHide: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  modalType: PropTypes.string
};
