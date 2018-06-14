import React, { Component } from 'react';
import {Text, View} from 'react-native';



export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>In development mode</Text>

            </View>
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

