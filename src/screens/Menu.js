import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Menu extends Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(30, 120);
    }
    render() {
        return (
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                source={require('../../assets/welcome_animation.json')}
            />
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}

