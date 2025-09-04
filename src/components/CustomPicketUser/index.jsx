import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native';
import { dropDown, minus, plus, userCount } from '../../../assets';

const CustomPickerUser = (props) => {
    const [users, setUsers] = useState([]);
    const [finalU, setFinalU] = useState([]);
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
        setFinalU(u);
        setIsClicked(false);
        setTotalCount(0);
    }, []);

    const onPress = () => {
        const newVal = !isClicked;
        setIsClicked(newVal);
    }

    const onCancel = () => {
        setUsers(finalU);
        onPress();
    }

    const onSubmit = () => {
        let total = 0;
        users.map(item => {
            total = total+item.count;
        });
        setTotalCount(total);
        setFinalU(users);
        onPress();
    }

    const onChangeValue = (id, c) => {
        const newV = users.map((item, i)=>{
            if(i===id){
                return {
                    ...item, count: c, 
                }
            }
            return {
                ...item,
            }
        });
        setUsers(newV);
    }

    const renderItem = ({item, index}) => {
        let c = item?.count
        const onReduce = () => {
            c = c>0? c-1: c;
            onChangeValue(index, c);
        }
        const onIncrease = () => {
            c = c<5? c+1: c;
            onChangeValue(index, c);
        }
        
        return (
            <View key={index} style={styles.itemView}>
                <View>
                    <Text style={styles.head}>{item?.user}</Text>
                    <Text style={styles.subHead}>{''+item.sub}</Text>
                </View>
                <View style={styles.actionView}>
                    <TouchableOpacity onPress={onReduce}>
                        <Image style={styles.iconStyle} source={minus}/>
                    </TouchableOpacity>
                    <Text>{c}</Text>
                    <TouchableOpacity onPress={onIncrease}>
                        <Image style={styles.iconStyle} source={plus} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image style={styles.img} source={userCount}/>
                <Text>{totalCount}</Text>
                <Image source={dropDown} style={styles.drop}/>
            </TouchableOpacity>
            {
                isClicked && 
                <View style={styles.dropDownView}>
                    <FlatList 
                        data={users}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${index}`}
                    />
                    <View style={styles.actionView}>
                        <TouchableOpacity style={styles.submitView} onPress={onCancel}>
                            <Text style={styles.submit}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitView} onPress={onSubmit}>
                            <Text style={styles.submit}>Done</Text>
                        </TouchableOpacity>
                    </View>
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
    dropDownView: {
        position: 'absolute',
        width: 140,
        top: 30,
        left:4,
        paddingHorizontal: 4,
        backgroundColor: 'white',
        elevation: 2,
        zIndex: 2,
    },
    head: {
        fontSize: 16,
        color: 'black',
    },
    subHead: {
        fontSize: 12,
        color: 'black',
    },
    itemView: {
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionView: {
        flexDirection: 'row',
        alignSelf: 'center',
        textAlign: 'right',
    },
    iconStyle: {
        height: 20,
        width: 20,
        marginHorizontal: 4,
    },
    submitView: {
        marginHorizontal: 10,
        marginVertical: 4,
    },
    submit: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default CustomPickerUser;