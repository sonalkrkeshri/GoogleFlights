import {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomPickerTrip from '../CustomPickerTrip';
import { arrow, dotArrow, rightArrow } from '../../../assets';

const Search = () => {
    const [tripType, setTripType] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    useEffect(() => {
        const trip = [
            {
                value: 'One Way',
                img: rightArrow,
            },
            {
                value: 'Round Trip',
                img: arrow,
            },
            {
                value: 'Multi-City',
                img: dotArrow,
            },
        ];
        setTripType(trip);
    }, []);

    const onSelection = (index) => {
        setSelectedIndex(index);
    }

    return(
        <View style={styles.container}>
            <View style={styles.typeView}>
                <CustomPickerTrip 
                    selectedIndex={selectedIndex} 
                    options={tripType} 
                    onSelection={onSelection}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: 'white',
        paddingBottom: 10,
        elevation: 5,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    typeView: {
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default Search;