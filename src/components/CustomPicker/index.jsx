import {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { dropDown } from '../../../assets';

const CustomPicker = (props) => {
    const { selectedIndex, options} = props;
    const [selected, setSelected] = useState("");
    const [preImg, setPreImg] = useState(null);

    useEffect(() => {
        setSelected(options[selectedIndex].value);
        options[selectedIndex].img !== (null || undefined)? setPreImg(options[selectedIndex].img): setPreImg(null);
    }, [selectedIndex]);
    return (
        <TouchableOpacity style={styles.container}>
            {preImg && <Image style={styles.preImg} source={preImg}/>}
            <Text>{selected}</Text>
            <Image source={dropDown} style={styles.drop}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#e8f0fe',
        margin: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    preImg: {
        height: 20,
        width: 16,
        marginHorizontal: 10,
    },
    drop: {
        width: 20,
        height: 20,
        marginHorizontal: 6,
    }
});

export default CustomPicker;