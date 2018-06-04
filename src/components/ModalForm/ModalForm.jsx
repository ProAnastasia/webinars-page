import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addWebinar} from 'actions/webinarsActions';

import cross from 'images/icons/cross.svg';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import ImageUploader from 'components/ImageUploader';
import Icon from 'components/Icon';

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({target}) {
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleImageLoad(result = '') {
    this.setState({
      image: result
    });
  }

  handleSubmit(e) {
    const {image, title, description} = this.state;
    const areFieldsValid = !!image && !!title && !!description;
    const webinar = {
      image,
      title: title.trim(),
      description: description.trim()
    };

    e.preventDefault();

    if (!areFieldsValid) return;
    this.props.addWebinar(webinar);
    this.props.onClose();
  }

  renderTitleInput() {
    return (
      <div className="form__input">
        <label className="form__label" htmlFor="webinar-title">Title</label>
        <Input
          type="text"
          id="webinar-title"
          name="title"
          placeholder="Enter title"
          handleChange={this.handleInputChange}
          value={this.state.text}
        />
      </div>
    );
  }

  renderDescriptionInput() {
    return (
      <div className="form__input">
        <label className="form__label" htmlFor="webinar-description">Description</label>
        <Input
          elem="textarea"
          id="webinar-description"
          name="description"
          placeholder="Enter description"
          handleChange={this.handleInputChange}
          value={this.state.description}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="modal">
        <div className="modal__inner">
          <Icon
            glyph={cross}
            className="modal__close"
            onClick={this.props.onClose}
          />
          <h2 className="modal__title">Add new</h2>
          <Form
            className="form"
            action="#"
            onSubmit={this.handleSubmit}
          >
            <div className="form__input">
              <ImageUploader handleChange={this.handleImageLoad}/>
            </div>
            {this.renderTitleInput()}
            {this.renderDescriptionInput()}
            <Button
              modifiers={['green']}
              className="modal__button">
              Save
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(null, {addWebinar})(ModalForm);

ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  addWebinar: PropTypes.func.isRequired
};