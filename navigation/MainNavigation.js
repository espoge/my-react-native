import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen'


const MainNavigation = createStackNavigator({
    Home: HomeScreen,
    Task: TaskScreen
})

export default createAppContainer(MainNavigation)