import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Sergey';
    return (
        <View>
            <Text style={styles.textStyle}>Я начал шлепать на реакт нэйтив</Text>
            <Text style={styles.subHeaderStyle}>Меня зовут {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20        
    }
});

export default ComponentsScreen;