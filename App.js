import React from 'react';
import {Image, Platform} from 'react-native'
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Menu from "./src/screens/Menu";
import MapScreen from "./src/screens/MapScreen";
import SurferScreen from "./src/screens/SurferScreen";
import SellerScreen from "./src/screens/SellerScreen";
import {Styles} from "./src/Config/CommonStyles";

const Stack = TabNavigator({
        Menu: {
            screen: Menu,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 35, height: 35, tintColor: tintColor}}
                                                    source={require("./assets/images/menu.png")}/>,
                tabBarLabel: 'Menu',
            }
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 35, height: 35, tintColor: tintColor}}
                                                    source={require("./assets/images/map.png")}/>,
                tabBarLabel: 'Map',
            }
        },
        SurferView: {
            screen: SurferScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 35, height: 35, tintColor: tintColor}}
                                                    source={require("./assets/images/cart.png")}/>,
                tabBarLabel: 'Surfer View',
            }
        },
        SellerView: {
            screen: SellerScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 35, height: 35, tintColor: tintColor}}
                                                    source={require("./assets/images/meter.png")}/>,
                tabBarLabel: 'Seller View',
               }
        },

    }, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        navBarTitleTextCentered: true,
        setScreenTitleBarTitle: true,
        tabBarOptions: {
            activeTintColor: '#AA68EF',
            inactiveTintColor: '#BAC0C0',
            showIcon: true,
            showLabel: true,
            style: {
                borderTopWidth: 1,
                borderTopColor: Styles.BorderColor,
                backgroundColor: Styles.BackgroundColor,
                height:70,
                paddingBottom:5,
            },
            labelStyle:{
                fontSize:10,
            },

        },
    }
);
export default Stack;
