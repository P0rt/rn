// Этот компонент создан с Reducer — это просто функция, которая меняет состояния объекта в state, делая его копию и обращается всегда к копии;

import React, { useReducer } from 'react'; // подключили Reducer;
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => { // action
    switch (action.colorToChange) {
        case 'red': 
            return { ...state, red: state.red + action.amount}; // тут просто скопировали стэйт ...state оператором spread, присвоили цвету сумму
        case 'green': 
            return { ...state, green: state.green + action.amount};
        case 'blue': 
            return { ...state, blue: state.blue + action.amount};
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue:0}); 
    // первый аргумент state, второй это dispatch — это функция по запуску редьюса
    // синтаксис useReducer(reducer, вторым аргументом наш объект с цветами) 
    const {red, green, blue} = state;
    // добавляем переменные в state
    return (    
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })} // вызываем dispatch с аргументами, цвет который нужно изменить и сумма
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue" 
            />
            <View
                style={{
                    height: 1000,
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})` // берем цвета из state
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({ });

export default SquareScreen;