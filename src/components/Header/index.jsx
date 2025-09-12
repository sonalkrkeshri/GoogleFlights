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
            <TouchableOpacity onPress={onPress} style={styles.imgView}>
                <Image source={userImg} style={styles.userImages} />
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
    imgView: {
        padding:4,
        borderRadius: 20,
        borderWidth:1,
        borderColor: 'grey',
    },
    userImages: {
        height: 30,
        width: 30,
    },
});

export default Header;