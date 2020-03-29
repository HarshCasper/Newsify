import React, { Component } from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';

class ArticleWebView extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title={navigation.state.params.title} routeName="articleWebView" />
  });
  render() {
    const { navigation } = this.props;
    return (
      <WebView
        source={{ uri: `${navigation.state.params.articleUrl}` }}
      />
    );
  }
}

ArticleWebView.propTypes = {
  navigation: PropTypes.shape({
  }).isRequired
};

export default ArticleWebView;

