import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native';
import { check, dropDown } from '../../../assets';

const CustomPickerType = (props) => {
    const [selectedType, setSelectedType] = useState("");
    const [listType, setListType] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsClicked(false);
        const t = ["Economy", "Premium", "Business", "First"];
        setListType(t);
        setSelectedType(t[0]);
    }, []);

    const onPress = () => {
        const newVal = !isClicked;
        setIsClicked(newVal);
    }

    const renderItem = ({item, index}) => {
        const onSelect = () => {
            setSelectedType(listType[index]);
            setIsClicked(false);
        }

        return (
            <TouchableOpacity key={index} onPress={onSelect} style={styles.itemView}>
                <View style={styles.checkImg}>
                    {(selectedType === item) && <Image source={check} style={styles.img}/>}
                </View>
                <View>
                    <Text>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text>{selectedType}</Text>
                <Image source={dropDown} style={styles.imgCheck}/>
            </TouchableOpacity>
            {
                isClicked &&
                <View style={styles.dropDownView}>
                   <FlatList 
                        data={listType}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${index}`}
                   /> 
                </View>
            }
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
        marginHorizontal: 4,
        width: 120,
    },
    img: {
        height: 20,
        width: 16,
        marginHorizontal: 10,
    },
    dropDownView: {
        position: 'absolute',
        width: 180,
        top: 30,
        right: 0,
        paddingHorizontal: 2,
        backgroundColor: 'white',
        elevation: 2,
    },
    itemView: {
        flexDirection: 'row',
    },
    imgCheck: {
        height: 20,
        width: 20,
        padding: 4,
    },
    checkImg: {
        width: 40,
    }
});

export default CustomPickerType;