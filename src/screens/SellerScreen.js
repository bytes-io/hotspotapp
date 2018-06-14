import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from "../components/Header";
import SliderComponent from "../components/SliderComponent";
import ChartComponent from "../components/ChartComponent";
import NetworkLoad from "../components/NetworkLoad";

export default class SellerScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Seller View"/>
                <ScrollView >
                    <ChartComponent/>
                    <SliderComponent title="Min Price/GBytes"/>
                    <View style={styles.network}>
                        <NetworkLoad limit={80} value={50}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles={
    container:{
        flex:1,
    },
    network:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
}