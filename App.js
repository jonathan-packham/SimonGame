import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';

class Light extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.light, {backgroundColor: this.props.color}]}
            />
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timesToBlink: 1,
            durationMS: 1000,
            startEnabled: true,
            lightToBlink: 0,
            blinkSeq: '',
            playerSeq: '',
            blueLight: 'blue',
            greenLight: 'green',
            redLight: 'red',
            yellowLight: 'gold',
        }
    }

    play() {
        for (var i=0; i < this.timesToBlink; i++) {
            this.lightToBlink.push(Math.floor(Math.random() * 4) + 1);
        }
        this.blinkButton(this.state.lightToBlink)
        this.blinkSeq.push(this.state.lightToBlink)
        this.setState({startEnabled: true})
    }
    
    blinkButton(colorToBlink) {
        if (colorToBlink == 1) {
            this.blueBlink();
        }
        if (colorToBlink == 2) {
            this.greenBlink();
        }
        if (colorToBlink == 3) {
            this.redBlink();
        }
        if (colorToBlink == 4) {
            this.yellowBlink();
        }
    }

    blueBlink() {
        setTimeout(() => {
            this.setState({blueLight: 'cornflowerblue'});
            setTimeout(() => {
                this.setState({blueLight: 'blue'});
            }, durationMS);
        }, durationMS);
    }

    greenBlink() {
        setTimeout(() => {
            this.setState({greenLight: 'lawngreen'});
            setTimeout(() => {
                this.setState({greenLight: 'green'});
            }, durationMS);
        }, durationMS);
    }

    redBlink() {
        setTimeout(() => {
            this.setState({redLight: 'indianred'});
            setTimeout(() => {
                this.setState({redLight: 'red'});
            }, durationMS);
        }, durationMS);
    }

    yellowBlink() {
        setTimeout(() => {
            this.setState({yellowLight: 'yellow'});
            setTimeout(() => {
                this.setState({yellowLight: 'gold'})
            })
        })
    }

    start = () => {
        this.setState({startEnabled: false});
        this.play;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" /> 
                <View style={styles.simonLook}>
                    <View style={styles.btnContainer}>
                        <Light color={this.state.blueLight} />
                        <Light color={this.state.greenLight} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Light color={this.state.redLight} />
                        <Light color={this.state.yellowLight} />
                    </View>
                    {this.state.startEnabled && <Button title="Start" onPress={this.start} />}
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