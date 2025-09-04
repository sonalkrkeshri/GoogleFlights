import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomPickerTrip from '../CustomPickerTrip';
import CustomPickerUser from '../CustomPicketUser';
import CustomPickerType from '../CustomPickerType';
import Location from '../Location';
import Schedule from '../Schedule';
import Explore from '../Explore';

const Search = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelection = (index) => {
        setSelectedIndex(index);
    }

    return(
        <View style={styles.container}>
            <View style={styles.typeView}>
                <CustomPickerTrip 
                    selectedIndex={selectedIndex} 
                    onSelection={onSelection}
                />
                <CustomPickerUser />
                <CustomPickerType />
            </View>
            <View>
                <Location />
                <Schedule />
            </View>
            <View style={styles.exploreView}>
                <Explore />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingBottom: 10,
        elevation: 5,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    typeView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    exploreView: {
        height: 20,
        bottom: -10,
    }
});

export default Search;