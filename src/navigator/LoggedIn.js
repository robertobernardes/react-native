import { createBottomTabNavigator } from 'react-navigation'

import Dashboard from '../components/Main/Dashboard'
import Profile from '../components/Main/Profile'

const LoggedInNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
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
  Profile: {
    screen: Profile
  }
});

export default LoggedInNavigator
