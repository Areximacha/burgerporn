import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import Home from '../views/Home/Home'
import Feed from '../views/Feed/Feed'
import Settings from '../views/Settings/Settings'

const HomeStack = StackNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings }
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerBackTitle: null
  }
})

const Routes = TabNavigator({
  Home: { screen: HomeStack },
  Feed: { screen: Feed }
},
{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false
  }
})

export default Routes
