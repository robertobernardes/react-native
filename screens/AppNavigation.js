import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import Login from './Login';
import App from '../App';

const margem = Platform.OS === 'ios' ? 20 : 0;
const AppNavigation = StackNavigator({
  First: {
    screen: Login,
    navigationOptions: {
        headerStyle: {
            height: 0
        },
    }
  },
  Second: {
    screen: App,
    navigationOptions: {
        headerStyle: {
            height: 0
        },
    }
  }
})

export default AppNavigation