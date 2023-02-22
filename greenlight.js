import React, {Component} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';

class greenButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.light, {backgroundColor: this.props.color}]}
            />
        );
    }
}

export default class greenLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timesToBlink: 1,
            durationMS: 1000,
            startEnabled: true,
            lightColor: 'green',
        }
    }

    scheduler = (count) => {
        if (count > 0) {
            //blink and callback next
            this.blink(this.scheduler.bind(this, --count));
        } else {
            this.setState({startEnabled: true});
        }
    }

    blink(callback) {
        setTimeout(() => {
            //turn light on after a second
            this.setState({lightColor: 'lawngreen'});
            setTimeout(() => {
                //turn light off after a second
                this.setState({lightColor: 'green'});
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
                <View>
                    <greenButton color={this.state.lightColor} />
                </View>
                {this.state.startEnabled && <Button title='Start' onPress={this.start} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    light: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
})