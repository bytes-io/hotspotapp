import React from 'react';
import {View, TextInput, Text, ScrollView, Image} from 'react-native';
import {Styles} from "../Config/CommonStyles";
import Button from "../components/Button";
import Map from "../components/Map";



class MapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buyModeActive : false,
            sellModeActive: true,
        };
    }


    buyButtonPress(){
        this.setState({
            buyModeActive: true,
            sellModeActive: false,
        });
    }

    sellButtonPress(){

        this.setState({
            buyModeActive: false,
            sellModeActive: true,
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Map/>
                <View style={styles.overlay} pointerEvents='box-none'>
                    <View style={styles.mapHeader} pointerEvents='box-none'>
                        <View style={styles.headerUpperIcon}>
                            <Image style={styles.imageStyle}
                                   source={require("../../assets/images/setting.png")}/>
                            <Image style={styles.imageStyle}
                                   source={require("../../assets/images/heart.png")}/>
                        </View>
                        <Image style={styles.outerImage}
                               source={require("../../assets/images/target.png")}/>
                    </View>
                    <View style={styles.mapZoom} pointerEvents='box-none'>
                        <View style={styles.plusButton}>
                            <Image style={{height:20,width:20}}
                                   source={require("../../assets/images/add.png")}/>
                        </View>
                        <View style={styles.minusButton}>
                            <Image style={{height:20,width:20}}
                                   source={require("../../assets/images/minus.png")}/>
                        </View>
                    </View>
                    <View style={styles.menuButtons}>
                        <Button active={this.state.buyModeActive} onPress={this.buyButtonPress.bind(this)} title="BUY" />
                        <Button active={this.state.sellModeActive} onPress={this.sellButtonPress.bind(this)} title="SELL" />
                    </View>

                </View>

            </View>

        );
    }

}

const styles = {
    container: {
        flex: 1,
    },
    overlay:{
        flex:1,
        justifyContent:'space-between',
    },
    mapHeader:{
        marginTop:50,
        marginLeft:20,
        marginRight:20,
    },
    headerUpperIcon:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
    },
    imageStyle:{
        height:40,
        width:40,
        backgroundColor:'white',
        borderRadius:20,
        opacity:0.3,
    },
    outerImage:{
        height:40,
        width:40,
        backgroundColor:'white',
        borderRadius:20,
        opacity:0.2,
        alignSelf:'center',
    },
    mapZoom:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-end',
    },
    plusButton:{
        backgroundColor:'#F8F8F8',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomWidth:1,
        borderBottomColor:'#cecece',
        padding:10,

    },
    minusButton:{
        padding:10,
        backgroundColor:'#F8F8F8',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    menuButtons:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:50,
    },
};

export default MapScreen;