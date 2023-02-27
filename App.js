import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.blink = 0
        this.lengthOfSeq = 5
        this.seq = []
        this.mainSeq = []
        this.mainSeqCounter = 0
        this.state = {
            startEnabled: true,
            blueLight: {backgroundColor: 'blue'},
            greenLight: {backgroundColor: 'green'},
            redLight: {backgroundColor: 'red'},
            yellowLight: {backgroundColor: 'gold'},
        }
        this.play = this.play.bind(this)
        this.blueBlink = this.blueBlink.bind(this)
        this.greenBlink = this.greenBlink.bind(this)
        this.redBlink = this.redBlink.bind(this)
        this.yellowBlink = this.yellowBlink.bind(this)
        this.playerTurn = this.playerTurn.bind(this)
        this.blinkButton = this.blinkButton.bind(this)
    }

    play() {
        for (var i=0; i < this.lengthOfSeq; i++) {
            this.mainSeq.push(Math.floor(Math.random() * 4) + 1);
        }
        this.seq.push(this.mainSeq[this.mainSeqCounter])
        this.gameTurn()
        this.setState({startEnabled: false})
        this.numberOfClick = -1;
    }

    playerTurn(i) {
        this.numberOfClick++
        if (this.seq[this.numberOfClick] == i) {
            this.blinkButton(i)
            if (this.seq.length == this.numberOfClick + 1) {
                if (this.seq.length == this.mainSeq.length) {
                    alert("You Win!")
                    this.mainSeqCounter = 0
                    this.seq = []
                    return
                }
                this.mainSeqCounter++
                this.seq.push(this.mainSeq[this.mainSeqCounter])
                this.gameTurn()
                this.numberOfClick = -1;
            }
        } else {
            this.setState({startEnabled: true})
            alert("You Lose!")
            this.mainSeqCounter = 0
            this.seq = []
            return
        }
    }

    blinkButton(buttonToBlink) {
        if (buttonToBlink == 1) {
            this.blueBlink();
        }
        if (buttonToBlink == 2) {
            this.greenBlink();
        }
        if (buttonToBlink == 3) {
            this.redBlink();
        }
        if (buttonToBlink == 4) {
            this.yellowBlink();
        }
    }

    gameTurn() {
        var i = 0;
        let intervalID = setInterval(() => {
            if (this.seq.length == i) {
                clearInterval(intervalID);
            } else {
                if (this.seq[this.blink] == 1) {
                    this.blueBlink();
                }
                if (this.seq[this.blink] == 2) {
                    this.greenBlink();
                }
                if (this.seq[this.blink] == 3) {
                    this.redBlink();
                }
                if (this.seq[this.blink] == 4) {
                    this.yellowBlink();
                }
                this.blink++;
            }
            i++;
        }, 1000);
        this.blink = 0;
    }

    blueBlink() {
        setTimeout(() => {
            this.setState({blueLight: {backgroundColor: 'cornflowerblue'}});
        }, 200);
        setTimeout(() => {
          this.setState({blueLight: {backgroundColor: 'blue'}});
        }, 1000);
    }

    greenBlink() {
        setTimeout(() => {
            this.setState({greenLight: {backgroundColor: 'lawngreen'}});
        }, 200);
        setTimeout(() => {
          this.setState({greenLight: {backgroundColor: 'green'}});
      }, 1000);
    }

    redBlink() {
        setTimeout(() => {
            this.setState({redLight: {backgroundColor: 'indianred'}});
        }, 200);
        setTimeout(() => {
          this.setState({redLight: {backgroundColor: 'red'}});
      }, 1000);
    }

    yellowBlink() {
        setTimeout(() => {
            this.setState({yellowLight: {backgroundColor: 'yellow'}});
        }, 200);
        setTimeout(() => {
          this.setState({yellowLight: {backgroundColor: 'gold'}})
      }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />                
                <View style={styles.simonLook}>
                <Text style={{alignSelf: 'center', fontSize: 25, color: 'white',}}>Score: {this.mainSeqCounter}</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={[styles.light, this.state.blueLight]} disabled={this.state.startEnabled} onPress={() => this.playerTurn(1)} />
                        <TouchableOpacity style={[styles.light, this.state.greenLight]} disabled={this.state.startEnabled} onPress={() => this.playerTurn(2)} />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={[styles.light, this.state.redLight]} disabled={this.state.startEnabled} onPress={() => this.playerTurn(3)} />
                        <TouchableOpacity style={[styles.light, this.state.yellowLight]} disabled={this.state.startEnabled} onPress={() => this.playerTurn(4)} />
                    </View>
                    <Button title="Start" style={styles.startBtn} onPress={this.play} />
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
  startBtn: {
      marginTop: 150,
      width: 150,
      backgroundColor: 'grey',
      height: 60,
      borderRadius: 40,
      alignSelf: 'center',
  },
});