import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';

const CodeHive = () => (
  <Header headerText={'CodeHive'} />
);

AppRegistry.registerComponent('CodeHive', () => CodeHive);
