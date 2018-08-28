import { createStackNavigator } from 'react-navigation'

import Login from '../components/Login'

const LoggedOutNavigator = createStackNavigator({
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
  }
});

export default LoggedOutNavigator
