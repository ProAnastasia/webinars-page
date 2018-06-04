import React, {PureComponent} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class WebinarsItem extends PureComponent {
  render() {
    const {
      image,
      title,
      description,
      isFull
    } = this.props;
    const itemClasses = classNames(
      'webinars-list__item',
      {'webinars-list__item--full': isFull}
    );

    return (
      <li className={itemClasses}>
        <div className="webinars-list__content">
          <div
            className="webinars-list__image"
            style={{backgroundImage: `url(${image}`}}
          >
            Webinar image
          </div>
          <h2 className="webinars-list__title subtitle">{title}</h2>
          <p className="webinars-list__text text text--gray-transp">{description}</p>
        </div>
      </li>
    );
  }
}

WebinarsItem.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isFull: PropTypes.bool
};