import React from 'react'
import { View, ImageBackground, useWindowDimensions } from 'react-native'
import styles from "../Stylez/StyleSheet"
import HeaderBanner from "./HeaderBanner";
import Input from "./Input";
import TextElement from "./TextElement";
const img = require("../../assets/KistPoef2.png");


const ImgComp = () => {
     const { height, width } = useWindowDimensions();
    return (
            <ImageBackground 
            resizeMode="cover"
            style={styles.Image, {width: width, height: height}}
            source={img}>
            <HeaderBanner/>
            <TextElement/>
            <Input/>
            </ImageBackground>
    )
}

export default ImgComp
