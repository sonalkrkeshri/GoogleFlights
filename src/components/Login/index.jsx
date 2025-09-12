import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (text) => {
        setEmail(text);
    };

    const onChangePassword = (text) => {
        setPassword(text);
    }

    const onSubmit = () => {

    }

    const onRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Login</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.text}>Email</Text>
                <TextInput 
                    style={styles.input} 
                    inputMode="email" 
                    keyboardType="email-address"
                    placeholder="Email Address"
                    placeholderTextColor={'black'}
                    value={email} 
                    onChangeText={onChangeEmail}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.text}>Password</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Password"
                    placeholderTextColor={'black'} 
                    secureTextEntry={true}   
                    value={password}
                    onChangeText={onChangePassword}
                />
            </View>
            <View style={styles.actionView}>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerView} onPress={onRegister}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        marginTop: 20,
        elevation: 5,
        borderRadius: 20,
        height: 250,
    },
    header :{
        alignItems:'center',
        marginVertical: 20,
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    },
    inputView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: 'black',
        width: '20%'
    },
    input: {
        paddingLeft: 20,
    },
    actionView: {
        marginVertical: 20,
    },
    button: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        paddingHorizontal: 30,
        paddingVertical: 6
    },
    registerView: {
        alignSelf: 'center',
        marginVertical: 5,
    },
    registerText: {
        textDecorationLine: 'underline',
        color: 'black',
    }
}); 

export default Login;