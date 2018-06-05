import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import upload from 'images/icons/upload.svg';
import trash from 'images/icons/trash.svg';
import Icon from 'components/Icon';

const saveUploadedImage = (file, result) => {
  return {
    imagePreviewUrl: result,
    isPreviewVisible: true
  };
};

const clearImagePreview = () => {
  return {
    imagePreviewUrl: '',
    isPreviewVisible: false
  };
};

export default class ImageUploader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
      isPreviewVisible: false
    };
    this.renderPreview = this.renderPreview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearImagePreview = this.clearImagePreview.bind(this);
  }

  renderPreview() {
    return (
      <div
        className="image-uploader__preview"
        style={{backgroundImage: `url('${this.state.imagePreviewUrl}')`}}
      >
        <button
          className="image-uploader__clear"
          onClick={this.clearImagePreview}>
          <Icon glyph={trash}/>
        </button>
      </div>
    );
  }

  clearImagePreview() {
    this.setState(clearImagePreview());
    this.props.handleChange();
  }

  handleChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    e.preventDefault();

    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      this.setState(saveUploadedImage(file, reader.result));
      this.props.handleChange(this.state.imagePreviewUrl);
    };
  }

  render() {
    return (
      <div className="image-uploader">
        {this.state.isPreviewVisible &&
          this.renderPreview()
        }
        <input
          className="image-uploader__input"
          type="file"
          id="webinar-image"
          name="image"
          onChange={this.handleChange}
        />
        <Icon className="image-uploader__icon" glyph={upload}/>
        <span className="image-uploader__text">select an&#160;image file to&#160;upload or&#160;drag it&#160;here</span>
      </div>
    );
  }
}

ImageUploader.propTypes = {
  handleChange: PropTypes.func.isRequired
};
