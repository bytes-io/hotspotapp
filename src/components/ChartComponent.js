import React from 'react';
import {Image,Text, View} from 'react-native';
import {VictoryArea, VictoryGroup, VictoryLine} from "victory-native";
import {Styles} from "../Config/CommonStyles";

const data = [
    { x: 1, y: 1, },
    { x: 2, y: 4, },
    { x: 3, y: 2, },
    { x: 4, y: 5, },
    { x: 5, y: 3, },
    { x: 6, y: 6, },
    { x: 7, y: 2, },
    { x: 8, y: 4, },
    { x: 9, y: 2, },
];
const data3 = [
    { x: 1, y: 1, },
    { x: 2, y: 4, },
    { x: 3, y: 2, },
    { x: 4, y: 5, },
    { x: 5, y: 3, },
    { x: 6, y: 6, },
    { x: 7, y: 2, },
    { x: 8, y: 4, },
    { x: 9, y: 2, },
];
const data1=[
    { x: 1, y: 1, },
    { x: 2, y: 2, },
    { x: 3, y: 1, },
    { x: 4, y: 3, },
    { x: 5, y: 1, },
    { x: 6, y: 4, },
    { x: 7, y: 1, },
    { x: 8, y: 2, },
    { x: 9, y: 1, },
];

export default class ChartComponent extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.chartHeader}>
                    <View style={styles.volume}>
                        <Text>Volume</Text>
                        <Text style={styles.usage}>03 GB</Text>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={styles.expenses}>
                        <Text>Expenses</Text>
                        <Text style={styles.amount}>0244c.</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.chartBlock}>
                        <View style={styles.chartIcon}>
                            <Image style={{width: 25, height: 25}}
                                   source={require("../../assets/images/more.png")}/>
                        </View>
                        <Text style={styles.todaysStats}>Today's Stats</Text>
                    </View>

                    <VictoryGroup
                        height={150}
                        padding={{top: 0, bottom:35 ,left:0,right:82}}
                        style={{
                           backgroundColor:'transparent'
                        }}
                    >

                    <VictoryArea
                        style={{ data: { fill: "#D3C3EA",stroke:"#f1cbf9",strokeWidth:3  }}}
                        data={data3}
                        interpolation="natural"
                        height={150}
                        padding={{top: 0, bottom: 35,left:0,right:82}}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#03AEFB" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        interpolation="natural"
                        height={150}
                        padding={{top: 0, bottom: 35,left:0,right:82}}
                        data={data1}
                    />
                    </VictoryGroup>
                </View>

            </View>
        );
    }
}

const styles ={
    container: {
        height:247,
        borderWidth:1,
        borderColor:Styles.BorderColor,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        marginLeft:40,
        marginRight:40,
        marginTop:20,

    },
    chartHeader:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:80,
        borderBottomWidth:1,
        borderColor:Styles.BorderColor,
    },
    volume:{
         flexDirection:'column',
         alignSelf:'center',
         marginLeft:20,

    } ,
    borderLine:{
        borderRightWidth:1,
        borderColor:Styles.BorderColor,

    },
    expenses:{
        flexDirection:'column',
        alignSelf:'center',
        marginRight:20
    },

    usage:{
        fontSize:20,
        color:'#9936B1',
        marginTop:10,
    },
    amount:{
        fontSize:20,
        color:Styles.SecondaryTextColor,
        marginTop:10,
    },
    chartBlock:{
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,

    },
    todaysStats:{
        fontSize:13,
        justifyContent:'flex-start',
        marginLeft:20,
    },
    chartIcon:{
        flexDirection:'row',
        justifyContent:'flex-end',

    },
    chartSection:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
}