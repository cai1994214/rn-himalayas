import React from 'react';
import Navigator from '@/navigator/index';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native'; //状态栏
import store from '@/config/dva';
import '@/config/http';
export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
      </Provider>
    );
  }
}
