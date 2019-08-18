import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={styles.textStyle}>Current Count:{counter}</Text>
            <Button 
                title="Increase"
                onPress={() => {
                    setCounter(counter + 1);
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    setCounter(counter - 1);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
});

export default CounterScreen;