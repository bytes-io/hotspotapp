import React from 'react';
import {Image,Text, View} from 'react-native';
import {Styles} from "../Config/CommonStyles";
import {VictoryPie,} from "victory-native";
import Svg,{Circle} from "react-native-svg";



export default class NetworkLoad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                { x: "A", y: props.value },
                { x: "D", y: 100-props.value}
            ],
            data1 : [
                { x: "A", y: props.limit},
                { x: "C", y: 2.2 },
                { x: "D", y: 100-(props.limit+3) }
            ]
        };
    }
    render() {
        return (
            <View Style={styles.container}>

                <Text style={styles.networkLoad}>Network Load</Text>
                <View>
                    <VictoryPie
                        data={this.state.data}
                        height={300}
                        width={300}
                        labels={()=>null}
                        colorScale={["#9936B1", "#BAC0C0", "#BAC0C0","#BAC0C0" ]}
                        innerRadius={90}
                    />
                    <View style={styles.parent}>

                        <Svg width={300} height={300}>
                            <View style={styles.loadInfo} >
                                <Text style={styles.percentage}>{this.props.value}%</Text>
                                <Text >Average</Text>
                                <Text style={styles.remaining}>{'8.1%'}</Text>
                                <Image style={{width: 30, height: 30,tintColor:'#B9B9B9'}}
                                source={require("../../assets/images/more.png")}/>
                            </View>

                            <VictoryPie
                                data={this.state.data1}
                                style={{
                                    labels: { fill: Styles.SecondaryTextColor, fontSize: 15,},
                                    data: {
                                    stroke: (data1) => data1.x === "C"?"black":null,
                                    strokeWidth: 4,

                                }}}
                                height={295}
                                width={295}
                                standalone={false}
                                cornerRadius={100}
                                labels={(data1) => data1.x==="C"?"Limit":null}
                                colorScale={["transparent", "transparent", "transparent","transparent" ]}
                                innerRadius={85}
                            />
                        </Svg>

                     </View>
                </View>
            </View>
        );
    }

}

const styles = {
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     },
    networkLoad:{
        fontSize:20,
        color:Styles.SecondaryTextColor,
        marginTop:10,
        //marginBottom:10,
        alignSelf:'center',

    },
    loadInfo:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    percentage:{
        fontSize:20,
        fontWeight:'600',
        color:'#6C6C6C'
    },
    remaining:{
        fontSize:12,
    },
    parent:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,

    }
};