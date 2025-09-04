import React, {useState, useEffect} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import { calendar, cross } from '../../../assets';
import CustomDate from '../CustomDate';
import { Calendar } from 'react-native-calendars';

const Schedule = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState([]);
    const [visible, setVisible] = useState(false);
    const [minDate, setMinDate] = useState();
    const dateNow = new Date().toDateString();
    useEffect(() => {
        const defaultDate = [dateNow, dateNow];
        setSelectedDate(defaultDate);
        setMinDate(dateNow);
    }, []);

    const onChangeDate = (newDate) => {
        const newValue = new Date(newDate.dateString).toDateString();
        const newSelectedDate = [...selectedDate];
        if(selectedIndex === 0) {
            newSelectedDate[0] = newValue;
            if(Date.parse(newValue) > Date.parse(newSelectedDate[1])){
                newSelectedDate[1] = newValue;
            }

        } else {
            newSelectedDate[selectedIndex] = newValue;
        }
        setSelectedDate(newSelectedDate);
        setVisible(false);
    }
    

    const onOpen = (key) => {
        setVisible(true);
        setSelectedIndex(key);
        if(key===0){
            setMinDate(dateNow);
        } else {
            setMinDate(selectedDate[0]);
        }
    }

    const onClose = () => {
        setVisible(false);
    }

    return(
        <View>
            <View style={styles.container}>
                <CustomDate icon={calendar} date={selectedDate[0]} onPress={onOpen} index={0}/>
                <CustomDate icon={calendar} date={selectedDate[1]} onPress={onOpen} index={1}/>
            </View>
            <Modal 
                visible={visible} 
                style={styles.modalView}
                transparent={true}

            >
                <View style={styles.outView}>
                    <TouchableOpacity style={styles.closeView} onPress={onClose}>
                        <Image source={cross} style={styles.imgStyle}/>
                    </TouchableOpacity>
                </View>
                <Calendar style={styles.calendarView} onDayPress={onChangeDate} current={selectedDate[selectedIndex]} minDate={minDate}/>
                <View style={styles.outView}></View>
            </Modal>
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
    outView: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    calendarView: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        margin: 4,
        padding: 14,
    },
     imgStyle: {
        width: 50,
        height: 50,
    },
    closeView: {
        backgroundColor: 'white',
        alignSelf: 'center',
        margin:10,
        borderRadius: 40,
    },
});

export default Schedule;