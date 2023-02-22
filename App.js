import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react'; 
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class redLight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.light, {backgroundColor: 'red'}]}
      />
    )
  }
}

class blueLight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <TouchableOpacity
      style={[styles.light, {backgroundColor: 'blue'}]}
    />
  }
}

class greenLight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <TouchableOpacity
      style={[styles.light, {backgroundColor: 'green'}]}
    />
  }
}

class yellowLight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <TouchableOpacity
      style={[styles.light, {backgroundColor: 'yellow'}]}
    />
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times
    }
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  simonLook: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 5,
    backgroundColor: 'black',
  },
});
