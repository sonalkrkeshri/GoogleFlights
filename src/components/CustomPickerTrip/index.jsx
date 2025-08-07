import {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { dropDown, arrow, dotArrow, rightArrow } from '../../../assets';


const CustomPickerTrip = (props) => {
    const { selectedIndex, onSelection} = props;
    const [selected, setSelected] = useState("");
    const [preImg, setPreImg] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [tripType, setTripType] = useState([]);

    useEffect(() => {
        const sel = tripType[selectedIndex];
        if(sel){
            const {value, img} = sel;
            setSelected(value);
            img !== (null || undefined)? setPreImg(img): setPreImg(null);
        }
    }, [selectedIndex]);
    
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
        setSelected(trip[0].value);
        setIsClicked(false);
    }, []);

    const onPress = () => {
        const newVal = !isClicked;
        setIsClicked(newVal);        
    }

    const renderItem = ({item, index}) => {
        const onSelect = () => {
            onSelection(index);
            setIsClicked(false);
        }
        return (
            <TouchableOpacity key={index} onPress={onSelect}>
                <ItemComponent 
                    preImg={item.img}
                    selected={item.value}
                />
            </TouchableOpacity>
        );
    }

    const ItemComponent = (props) => {
        const {preImg, selected, dropDown} = props;
        return (
            <View style={styles.subContainer}>
                {preImg && <Image style={styles.preImg} source={preImg}/>}
                <Text>{selected}</Text>
                {dropDown && <Image source={dropDown} style={styles.drop}/>}
            </View>
        );
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <ItemComponent preImg={preImg} selected={selected} dropDown={dropDown} />
            </TouchableOpacity>
            {
                isClicked && 
                <FlatList 
                    data={tripType}
                    renderItem={renderItem}
                    keyExtractor={(item, index)=> `${index}`}
                    style={styles.dropDownView}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        marginHorizontal: 4,
        width: 130,
    },
    subContainer: {
        paddingHorizontal: 8,
        backgroundColor: '#e8f0fe',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
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
    }, 
    dropDownView: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        padding: 4,
        width: '100%',
    },
});

export default CustomPickerTrip;