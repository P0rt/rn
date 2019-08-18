import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Я заголовок и две кнопки</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Screen"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to Count"
        onPress={() => navigation.navigate('Count')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
