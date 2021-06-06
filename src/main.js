import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Home from './navigations/home';

class Appp extends Component {
  render() {
    return (
      <View style={styles.View}>
        <Text style={styles.bodyText}>Welcome to Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
  },
});

export default Appp;
