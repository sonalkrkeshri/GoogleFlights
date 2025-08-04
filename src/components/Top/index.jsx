import {} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import { topBack } from '../../../assets';

const TopComponent = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={topBack} style={styles.backImg}>
                <Text style={styles.headingText}>{'Flights'}</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '100%',
    },
    backImg: {
        height: 150,
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 40,
        padding: 8,
        color: 'black',
    }
});

export default TopComponent;