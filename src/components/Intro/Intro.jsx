import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {modalShow} from 'actions/modalActions';

import {ModalName} from 'constants';
import Button from 'components/Button';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal({target}) {
    this.props.modalShow(target.dataset.type);
  }

  render() {
    return (
      <div className="intro">
        <div className="intro__description">
          <h1 className="intro__title title">Webinars</h1>
          <p className="intro__text text text--white">Here you can register and take part in&#160;educational webinars conducted
            by&#160;the best digital marketing experts.</p>
          <Button
            className="intro__button"
            modifiers={['white']}
            data-type={ModalName.FORM}
            onClick={this.openModal}
          >
            Add new
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(null, {modalShow})(Intro);

Intro.propTypes = {
  modalShow: PropTypes.func.isRequired
};