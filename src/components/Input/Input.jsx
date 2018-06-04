import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Input extends PureComponent {
  render() {
    const {
      className,
      placeholder,
      id,
      handleChange,
      handleBlur,
      value,
      type,
      elem,
      ...rest
    } = this.props;

    const Elem = elem ? elem : 'input';

    return (
      <Elem
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type={type}
        id={id}
        {...rest}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  elem: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
