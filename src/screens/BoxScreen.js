import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.boxContainer}>
            <View style={styles.boxOne}/>
            <View style={styles.boxTwo}/>
            <View style={styles.boxThree}/>
        </View>
    );
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxOne: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    boxTwo: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        margin: 50
    },
    boxThree: {
        width: 50,
        height: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;