import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';

const RegisterScreen = () => {
    //  const navigation = useNavigation();
        // navigation.navigate('Register');
        
        return (
            <View style={styles.container}>
                <View style={styles.cardView}>
                    <Text>Register Screen</Text>
                </View>
            </View>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        cardView: {
            backgroundColor: 'white',
            padding: 10,
            margin: 10,
            marginTop: 20,
            elevation: 5,
            borderRadius: 20,
            height: 200,
        }
    });

export default RegisterScreen;