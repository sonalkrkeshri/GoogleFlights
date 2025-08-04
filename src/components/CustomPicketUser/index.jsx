import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { dropDown, userCount } from '../../../assets';

const CustomPickerUser = (props) => {
    const [users, setUsers] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    useEffect(() => {
        const u = [
            {user: 'Adult', sub: '', count: 0},
            {user: 'Children', sub: 'Aged 2-11', count: 0},
            {user: 'Infants', sub: 'In Seat', count: 0},
            {user: 'Infants', sub: 'On Lap', count: 0},
        ];
        setUsers(u);
        setIsClicked(false);
        setTotalCount(0);
    }, []);

    const onPress = () => {
        const newVal = !isClicked;
        setIsClicked(newVal);
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image style={styles.img} source={userCount}/>
                <Text>{totalCount}</Text>
                <Image source={dropDown} style={styles.drop}/>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        paddingHorizontal: 4,
        backgroundColor: '#e8f0fe',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        marginHorizontal: 4,
    },
    img: {
       height: 20,
        width: 16,
        marginHorizontal: 10, 
    },
    drop: {
        width: 20,
        height: 20,
        marginHorizontal: 6,
    }, 
});

export default CustomPickerUser;