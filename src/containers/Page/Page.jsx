import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import PageHeader from 'components/PageHeader/PageHeader';

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader/>
        <main className="page-content">
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(Page);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};