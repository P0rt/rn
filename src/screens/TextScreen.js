import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={styles.input}>Enter Password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalaize="none"
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            {
                password.length < 4
                    ? <Text>Пароль должен быть больше пяти символов</Text> 
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({ 
    input: {
        margin: 15,
        padding: 5, 
        height: 50,
        fontSize: 30,
        borderColor: 'red',
        borderWidth: 1
    },
    input: {
        fontSize: 30
    }
});

export default TextScreen;