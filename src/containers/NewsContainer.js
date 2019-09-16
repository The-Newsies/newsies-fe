import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchContainer from './SearchContainer';
import TrendingContainer from './TrendingContainer';
import { getDisplay } from '../selectors/displaySelector';

class NewsContainer extends Component {
  static propTypes = {
    display: PropTypes.string.isRequired
  }

  render() {
    const { display } = this.props;
    
    if(display === 'search') {
      return <SearchContainer />;
    }

    return <TrendingContainer />;
  }
}

const mapStateToProps = state => ({
  display: getDisplay(state)
});

export default connect(
  mapStateToProps
)(NewsContainer);
