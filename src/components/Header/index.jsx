import {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { googleImg, userImg } from '../../../assets';

const Header = () => {

    return (
        <View style={styles.container}>
            <Image source={googleImg} style={styles.googleImage} />
            <Image source={userImg} style={styles.userImages}/>
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