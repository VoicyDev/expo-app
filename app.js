import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { NativeRouter } from 'react-router-native'; // 4.2.0
import { Navigation, Card } from 'react-router-navigation'; // 1.0.0-rc.3
import { Redirect } from "react-router"; // 4.2.0

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Navigation>
          <Card
            exact
            path="/"
            render={() => {
              console.log('Redirecting.');
              return (
                <Redirect to="/redirect" />
              );
            }}
          />
          
          <Card
            path="/redirect"
            render={() => (
              <View style={styles.container}>
                <Text>Redirected.</Text>
              </View>
            )}
          />
        </Navigation>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});