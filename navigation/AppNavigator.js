import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import AuthLoadingScreen from  '../screens/AuthLoadingScreen'
import IntroScreen from  '../screens/IntroScreen'
import IntroFormScreen from  '../screens/IntroFormScreen'


// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });
const AppTabs = createBottomTabNavigator({ Home: HomeScreen, Intro: 'lebouton2', Test: 'lebouton'});
const AuthTabs = createBottomTabNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });


export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: AppTabs,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);