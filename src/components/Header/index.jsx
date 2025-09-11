import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { googleImg, userImg } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    const onPress= () => {
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.container}>
            <Image source={googleImg} style={styles.googleImage} />
            <TouchableOpacity onPress={onPress}>
                <Image source={userImg} style={styles.userImages}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 60,
        elevation: 100,
        borderBottomColor: 'grey',
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'space-between',
    },
    googleImage: {
        width: 120,
        height: 40,
        resizeMode: 'cover',
    },
    userImages: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth:1,
    },
});

export default Header;