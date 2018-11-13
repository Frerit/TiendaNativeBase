import React from "react";
import { DrawerNavigator, StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation'
import {Icon} from "native-base";


import Login from "../scenes/login";

// StackNavigator screens


// TabNavigator screens
import Home from "../scenes/home";
import Catalog from "../scenes/catalog";
import Setting from "../scenes/setting";


export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} ></Icon>
        }
    },
    Catalog : {
        screen: Catalog,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={24} color={tintColor} ></Icon>
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="sliders" size={24} color={tintColor} ></Icon>
        }},
},{
    order: ['Home', 'Catalog', 'Setting'],
    initialRouteName: 'Home',
    animationEnabled: true,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: "#ffaf1a",
        inactiveTintColor: "#868683",
        labelStyle:  {
            fontSize: 14,
        },
        style:{
            backgroundColor: '#0000'
        }
    }
});



export const Stack = StackNavigator({
    Home: { screen: Home },
    Catalog: { screen: Catalog },
}, {
    initialRouteName: 'Home',
})


export const Drawer = DrawerNavigator({
    Stack: { screen: Stack },
    Tabs: { screen: Tabs }
})



export const AppNavigations = SwitchNavigator( {
    Login: Login,
    Drawer: Drawer
})