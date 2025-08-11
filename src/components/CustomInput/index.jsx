import React from 'react';
import {TextInput, Image, View, StyleSheet} from 'react-native';

const CustomInput = (props) => {
    const {icon, placeholder, onChange, value} = props;
   
    const onChangeText = (text) => {
        onChange(text);
    }
    return (
        <View style={styles.inputView}>
            <Image source={icon} style={styles.imgStyle} />
            <TextInput style={styles.textStyle} placeholder={placeholder} value={value} onChangeText={onChangeText} />
        </View>
    );
};

const styles=StyleSheet.create({
    imgStyle: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
    },
    textStyle: {
        color: 'black',
        fontSize: 16,
    },
    inputView: {
        width: '48%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
});

export default CustomInput;