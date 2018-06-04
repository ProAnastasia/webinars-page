import React, {Component} from 'react';
import {} from 'react-router';

import Page from 'containers/Page';
import ModalContainer from 'containers/ModalContainer';
import Intro from 'components/Intro';
import WebinarsList from 'containers/WebinarsList';

class MainPage extends Component {
  render() {
    return (
      <Page>
        <Intro/>
        <WebinarsList/>
        <ModalContainer/>
      </Page>
    );
  }
}

export default MainPage;