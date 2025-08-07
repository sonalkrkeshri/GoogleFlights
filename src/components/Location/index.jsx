import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { circle, exchange, location } from '../../../assets';
import CustomInput from '../CustomInput';

const Location = () => {
    const [fromLoc, setFromLoc] = useState("");
    const [toLoc, setToLoc] = useState("");
    const onPress = () => {
        const temp = toLoc;
        setToLoc(fromLoc);
        setFromLoc(temp);
    }

    const onChangeFrom = (text) => {
        setFromLoc(text);
    }

    const onChangeTo = (text) => {
        setToLoc(text);
    }


    return (
        <View style={styles.container}>
            <CustomInput icon={circle} placeholder={'Where from?'} value={fromLoc} onChange={onChangeFrom}/>
            <TouchableOpacity style={styles.imageView} onPress={onPress}>
                <Image source={exchange} style={styles.image}/>
            </TouchableOpacity>
            <CustomInput icon={location} placeholder={'Where to?'} value={toLoc} onChange={onChangeTo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        position: 'absolute',
        zIndex: 1,
        borderRadius: 25,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: 'white',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 20,
        width: 20,
    },

});

export default Location;