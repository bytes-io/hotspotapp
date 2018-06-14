import React from 'react';
import {Text, View} from 'react-native';
import MapView from "react-native-maps";
import {Styles} from "../Config/CommonStyles";

import Slider from "react-native-slider";

export default class SliderComponent extends React.Component {

    state = {
        value: 0.2
    };

    render() {
        return (
                <View style={styles.containerSlider}>

                    <Text style={styles.sliderHeader}>
                        {this.props.title}
                    </Text>
                    <Slider
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                        minimumTrackTintColor={"#F2A03A"}
                            maximumTrackTintColor={"#DEDEDE"}
                        thumbTintColor={"#F2A03A"}
                    />

                </View>

        );
    }

}

const styles = {
    containerSlider: {
        alignItems: "stretch",
        justifyContent: "center",
        marginTop:20,
        marginLeft:40,
        marginRight:40,
    },
    sliderHeader:{
        fontSize:17,
        color:Styles.SecondaryTextColor
    },
};