import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

import {generateKey} from 'utils';
import {RenderListLimit} from 'constants';
import WebinarsItem from 'components/WebinarsItem';
import Pagination from 'components/Pagination';

class WebinarsList extends Component {
  constructor(props) {
    super(props);
  }

  renderEmptyContent() {
    return <p className="text text--centred text--gray">Sorry, there are no webinars yet...</p>;
  }

  renderPagination(pages, currentPage) {
    return (
      <Pagination
        pagesNum={pages}
        activePage={currentPage}
      />
    );
  }

  renderContent() {
    const {location, webinars} = this.props;
    const currentPage = parseInt(location.search.slice(-1)) || 1;
    const pages = Math.ceil(webinars.length / RenderListLimit.INITIAL);
    const startPoint = (currentPage - 1) * RenderListLimit.INITIAL;
    let startCount = 0;

    return (
      <div>
        <ul className="webinars-list">
          {webinars.map((webinar, index) => {
            const key = generateKey();

            if (startPoint <= index && startCount < RenderListLimit.INITIAL) {
              startCount++;

              return (
                <WebinarsItem
                  isFull={!((index - 4) % 8)} //Each fifth array element should be full
                  {...webinar}
                  key={key}
                />
              );
            }})}
        </ul>
        {pages > 1 ? this.renderPagination(pages, currentPage): null}
      </div>
    );
  }

  render() {
    const areWebinarsExists = !!this.props.webinars.length;

    return (
      <div className="container">
        {areWebinarsExists ?
          this.renderContent() :
          this.renderEmptyContent()
        }
      </div>
    );
  }
}

const mapStateToProps = ({webinars}) => {
  return {
    webinars: webinars.list
  };
};

export default withRouter(connect(mapStateToProps)(WebinarsList));

WebinarsList.propTypes = {
  webinars: PropTypes.array,
  location: PropTypes.object,
};