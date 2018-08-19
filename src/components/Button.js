import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Styles} from "../Config/CommonStyles";


class Button extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}
                              style={[styles.buttonStyle,
                              this.props.active ? styles.buttonStyleActive : styles.buttonStyleInactive]}>
                <Text style={[styles.textStyle,
                      this.props.active ? styles.textStyleActive : styles.textStyleInactive]}>
                      {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    buttonStyle: {
        flex: 1,
        backgroundColor: Styles.ButtonBackground,
        borderBottomWidth: 10,
        height: 70,
        opacity: 0.8,
        justifyContent: 'center',
        margin: 20,
    },
    buttonStyleActive: {
        borderColor: '#9936B1',
    },
    buttonStyleInactive: {
        borderColor: '#4B6176',
    },
    textStyle: {
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'center',
        textAlignVertical: 'center',
    },
    textStyleActive: {
        color: '#9936B1',
    },
    textStyleInactive: {
        color:'white',
    },

}

export default Button;
