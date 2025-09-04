import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { search } from "../../../assets";

const Explore = () => {
    return (
        <View>
            <TouchableOpacity style={styles.exploreView}>
                <Image source={search} style={styles.imgStyle} tintColor={'white'}/>
                <Text style={styles.text}>Explore</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    exploreView: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    imgStyle: {
        width: 20,
        height: 20,
        marginRight: 10,
    }
});

export default Explore;