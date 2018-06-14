import React from 'react';
import {Image, Text, View} from 'react-native';

import {Styles} from "../Config/CommonStyles";

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <View/>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
                <Image style={{width: 30, height: 30, tintColor:'#BAC0C0'}}
                       source={require("../../assets/images/more.png")}/>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: Styles.BackgroundColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Styles.BorderColor,
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor:'#BAC0C0',
        shadowOffset:{width:0, height:5},
        shadowOpacity:0.5,
        elevation:2,
    },
    textStyle: {
        fontSize: 20,
        color: '#737373',
        alignSelf:'center',
        fontWeight:'600',
        marginLeft:30
    },
};
