// Этот компонент создан с Reducer — это просто функция, которая меняет состояния объекта в state, делая его копию и обращается всегда к копии;
import React, { useReducer } from 'react'; // подключили Reducer;
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => { // action
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state
            : { ...state, red: state.red + action.payload};
        case 'change_green': 
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state
            : { ...state, green: state.green + action.payload};
        case 'change_blue': 
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state
            : { ...state, blue: state.blue + action.payload};
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
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} // вызываем dispatch с аргументами, цвет который нужно изменить и сумма
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color="Red" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color="Green" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
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