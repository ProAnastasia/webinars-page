import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {modalHide} from 'actions/modalActions';

import Modal from 'components/Modal';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.root = document.getElementById('root-modal');
    this.modalContainer = document.createElement('div');
  }

  componentDidMount() {
    this.root.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    this.root.removeChild(this.modalContainer);
  }

  render() {
    return (
      ReactDOM.createPortal(<Modal {...this.props}/>, this.modalContainer)
    );
  }
}

const mapStateToProps = ({modalState}) => {
  return {
    modalType: modalState.modalType,
    isOpened: modalState.isOpened
  };
};

export default connect(mapStateToProps, {modalHide})(ModalContainer);