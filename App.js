import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react'; 
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class redLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.light, {backgroundColor: this.props.color}]}
      />
    )
  }
}

class blueLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    }
  }

  render() {
    <TouchableOpacity
      style={[styles.light, {backgroundColor: this.state.color}]}
    />
  }
}

class greenLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
    }
  }

  render() {
    <TouchableOpacity
      style={[styles.light, {backgroundColor: this.state.color}]}
    />
  }
}

class yellowLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'yellow',
    }
  }

  render() {
    <TouchableOpacity
      style={[styles.light, {backgroundColor: this.state.color}]}
    />
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesToBlink: 1,
      durationMS: 1000,
      startEnabled: true,
      lightColor: 'orange',
    }
  }

  scheduler = (count) => {
    if (count > 0) {
      //blink and callback
      this.blink(this.scheduler.bind(this, --count));
    } else {
      this.setState({startEnabled: true});
    }
  }

  blink(callback) {
    setTimeout(() => {
      //turn light on, then off
      setTimeout(() => {
        //turn off
        this.setState({lightcolor: this.props.color});
        if (callback) callback(); //call next
      }, this.state.durationMS);
    }, this.state.durationMS);
  }

  start = () => {
    this.setState({startEnabled: false});
    this.scheduler(this.state.timesToBlink);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.simonLook}>
          <View style={styles.btnContainer}>
            <redLight color={this.state.lightColor} />
          </View>
        </View>
      </View>
    )
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
