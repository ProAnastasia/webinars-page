import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      className,
      action,
      children,
      ...rest
    } = this.props;

    return (
      <form
        action={action}
        className={className}
        onSubmit={this.props.handleSubmit}
        {...rest}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  action: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
