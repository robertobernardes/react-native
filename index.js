import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Aplicacao from './src/screens/App';
import Login from './src/screens/Login';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppNavigator = createStackNavigator({
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
    screen: Aplicacao,
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
  },
});

export default AppNavigator;

AppRegistry.registerComponent('InstaluraMobile', () => AppNavigator);