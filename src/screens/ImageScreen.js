import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetails 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')}
                score={9}
            />
            <ImageDetails 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')}
                score={6}
            />
            <ImageDetails 
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageScreen;