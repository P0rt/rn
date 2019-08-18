import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetails = ({ imageSource, title, score }) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageDetails;