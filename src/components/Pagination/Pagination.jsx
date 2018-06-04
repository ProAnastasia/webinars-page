import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import {generateKey} from 'utils';

export default class Pagination extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderItems() {
    const {pagesNum, activePage} = this.props;
    const buttons = [];
    let counter = 0;

    if (!this.props.pagesNum) return null;

    while (counter < pagesNum) {
      const key = generateKey();
      const linkClasses = classNames(
        'pagination__item',
        {'pagination__item--active': counter + 1 === activePage}
      );

      buttons.push(
        <Link
          key={key}
          to={`?page=${counter + 1}`}
          className={linkClasses}>
          {counter + 1}
        </Link>);

      counter++;
    }

    return buttons;
  }

  render() {
    return(
      <ul className="pagination">
        {this.renderItems()}
      </ul>
    );
  }
}

Pagination.propTypes = {
  pagesNum: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired
};