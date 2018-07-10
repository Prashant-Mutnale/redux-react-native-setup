import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
class Home extends Component<Props> {
  render() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default Home;