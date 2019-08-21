import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'Sega Port', age: '20'},
        {name: 'Sasha Brtch', age: '45'},
        {name: 'Sergey Nugaev', age: '32'},
        {name: 'Danya Shepovalov', age: '27'},
        {name: 'Any Brant', age: '53'},
        {name: 'Ilya Kantor', age: '30'},
        {name: 'David Semfilukov', age: '30'},
        {name: 'Ruslan Rus', age: '30'},
        {name: 'Zachar Rem', age: '30'},
        {name: 'Lua Li', age: '30'},
        {name: 'Yan Yan', age: '30'},
        {name: 'Kirill Furzikov', age: '30'}
    ];

    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return (
                    <Text style={styles.text}>{item.name} - Age {item.age}</Text>
                )
                }}
        />    
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        marginVertical: 50
    }
});

export default ListScreen;