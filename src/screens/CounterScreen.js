import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
// state === { count: number };
// action === { type: 'increment' || 'decriment', payload }; 
    switch (action.type) {
        case 'increment': 
            return { ...state, count: state.count + action.payload};
        case 'decrement':
            return state.count + action.payload === 1 
            ? state
            : { ...state, count: state.count - action.payload};
        default:    
            return state;
    }
};

const СounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 1 });
    
    return (
        <View>
            <Text style={styles.textStyle}>Current Count: {state.count}</Text>
            <Button 
                title="Increase"
                onPress={() => dispatch({
                    type: 'increment', 
                    payload: 1
                })}
            />
            <Button 
                title="Decrease"
                onPress={() => dispatch({
                    type: 'decrement',
                    payload: 1
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
});

export default СounterScreen;