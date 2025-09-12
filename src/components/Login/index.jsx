import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (text) => {
        setEmail(text);
    };

    const onChangePassword = (text) => {
        setPassword(text);
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
        height: 200,
    },
    header :{
        alignItems:'center',
        marginVertical: 10,
    },
    headerText: {
        fontSize: 20,
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
    }
}); 

export default Login;