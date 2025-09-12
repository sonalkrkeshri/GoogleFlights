import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/ProfileScreen/RegisterScreen';

const ProfileNav = createStackNavigator({
    screens: {
        Login: {
            screen: ProfileScreen,
            options: {
                title: 'Profile'
            }
        },
        Register: {
            screen: RegisterScreen,
            options: {
                title: 'Register'
            }
        }
    }
});

const Stack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                headerShown: false,
            }
        },
        Profile: {
            screen: ProfileNav,
            options: {
                headerShown: false,
            }
        }
    }
});

const Navigation = createStaticNavigation(Stack);
export default Navigation;