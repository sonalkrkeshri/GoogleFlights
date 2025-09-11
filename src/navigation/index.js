import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                headerShown: false,
            }
        },
        Profile: {
            screen: ProfileScreen,
            options: {
                title: 'Profile'
            }
        }
    }
});

const Navigation = createStaticNavigation(Stack);
export default Navigation;