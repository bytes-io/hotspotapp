import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Styles} from "../Config/CommonStyles";
import Header from "../components/Header";
import SliderComponent from "../components/SliderComponent";
import ChartComponent from "../components/ChartComponent";
import Map from "../components/Map";


export default class SurferScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Surfer View"/>
                <ScrollView style={styles.mapScroll}>
                    <View style={styles.mapSection}>
                        <Map/>
                        <View style={styles.mapButton}>
                            <TouchableOpacity style={ styles.buttonStyle}>
                                <View style={styles.buttonContent}>
                                    <Image style={{width: 20, height: 20, tintColor:'#64dde1'}}
                                           source={require("../../assets/images/locationarrow.png")}/>
                                    <Text style={styles.textStyle}>0.2 Km</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SliderComponent title="Max Price/GBytes"/>
                    <ChartComponent/>
                </ScrollView>
            </View>
        );
    }
}
const styles={
    container:{
        flex:1,
    },
    mapScroll:{
            paddingBottom:150,
            backgroundColor:'transparent'
    },
    mapSection: {
        height:200,
    },
    mapButton:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:20,
    },
    buttonStyle:{
        height:40,
        width:100,
        padding:10,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:'transparent',
        borderWidth:1,
        borderRadius:20,
        borderColor:'#64DDE1',

    },
    buttonContent:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'transparent',
    },
    textStyle:{
        fontSize:15,
        alignSelf:'center',
        textAlignVertical: 'center',
        color:'#62d5d9',
        fontWeight:'bold'
    },
}