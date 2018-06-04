import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends PureComponent {
  render() {
    const {
      className,
      glyph,
      wrap,
      ...rest
    } = this.props;

    const iconClasses = classNames(
      'icon',
      className
    );

    const Elem = wrap ? wrap : 'span';

    return (
      <Elem
        className={iconClasses}
        dangerouslySetInnerHTML={{__html: glyph}}
        {...rest}
      />
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string,
  wrap: PropTypes.string
};