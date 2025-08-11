import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomInput from '../CustomInput';
import { calendar } from '../../../assets';

const Schedule = () => {
    const [date1, setDate1] = useState();
    const [date2, setDate2] = useState();
    useEffect(() => {
        const dateNow = new Date().toDateString();
        setDate1(dateNow);
        setDate2(dateNow);
    }, []);
    const onChangeDate1 = () => {

    }
    
    const onChangeDate2 = () => {

    }

    return(
        <View style={styles.container}>
            <CustomInput icon={calendar} placeholder={date1} onChange={onChangeDate1} value={date1}/>
            <CustomInput icon={calendar} placeholder={date2} onChange={onChangeDate2} value={date2}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '96%',
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Schedule;