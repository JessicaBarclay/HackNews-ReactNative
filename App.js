import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import Feed from './src/components/Feed';

const CodeHive = () => (
  <View>
    <Header headerText={'CodeHive'} />
    <Feed />
  </View>
);

AppRegistry.registerComponent('CodeHive', () => CodeHive);
