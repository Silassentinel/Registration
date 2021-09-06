import React from 'react'
import { View, ImageBackground } from 'react-native'
import styles from "../Stylez/StyleSheet"
import Input from "./Input";
import TextElement from "./TextElement";

const ImgComp = () => {
    return (
        <View style={styles.imgContainer}>
            <ImageBackground 
            resizeMode="contain"
            style={styles.Image} 
            source={{uri:"https://media.gettyimages.com/photos/eye-of-needle-picture-id184110540",}}>
                <TextElement/>
                <Input/>
            </ImageBackground>
        </View>
    )
}

export default ImgComp
