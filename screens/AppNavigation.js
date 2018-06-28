//import React from 'react';
import { StackNavigator } from 'react-navigation';
//import { Platform, View } from 'react-native';
import Login from './Login';
import App from '../App';

//const margem = Platform.OS === 'ios' ? 20 : 0;
const AppNavigation = StackNavigator({
    Login: {
        screen: Login,        
        navigationOptions: {
            title: "Login", 
            headerTitleStyle: { 
                fontFamily: "Montserrat-Regular", 
                fontSize: 24, 
                fontWeight: "normal", 
                justifyContent: "center", 
                alignSelf: "center", 
                flex: 1,
                textAlign: 'center'
            }
        }        
    },
    Aplicacao: {
        screen: App,
        navigationOptions: {
            title: "Instalura",
            headerTitleStyle: { 
                fontFamily: "Montserrat-Regular", 
                fontSize: 24, 
                fontWeight: "normal", 
                justifyContent: "center", 
                alignSelf: "center", 
                flex: 1,
                textAlign: 'center'
            }
        }
        /*
        navigationOptions: {
            headerStyle: {
                height: 0
            },
        }
        */
    }
})

export default AppNavigation