import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Button extends PureComponent {
  render() {
    const {className, children, modifiers, ...rest} = this.props;
    const buttonClasses = classNames(
      'button',
      ...modifiers.map(modifier => `button--${modifier}`),
      className
    );

    return (
      <button
        className={buttonClasses}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  modifiers: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};