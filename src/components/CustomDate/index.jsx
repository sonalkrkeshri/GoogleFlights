import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';


const CustomDate = (props) => {
    const {icon, date, onPress, index} = props;
    const onSelect = () => {
        onPress(index);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <Image source={icon} style={styles.imgStyle} />
            <Text>{date}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container : {
        width: '48%',
        borderColor: 'black',
        borderWidth: 1,
        margin: 6,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
    },
    imgStyle: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
    },
});

export default CustomDate;