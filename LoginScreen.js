import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
                value={email}
                onChangeText={onChangeEmail}
                style={styles.inputBox}
                placeholder={'Email'}
                keyboardType={'email-address'}
            ></TextInput>
            <TextInput
                value={password}
                onChangeText={onChangePassword}
                style={styles.inputBox}
                placeholder={'Password'}
                keyboardType={'default'}
                secureTextEntry={true}
            ></TextInput>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        backgroundColor: "#EDEFEE",
        padding: 10,
        margin: 12,
        height: 40,
        borderWidth: 1,
        fontSize: 16,
        borderColor: "#EDEFEE",
    },
});
