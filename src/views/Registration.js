import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import HeaderBanner from "../components/HeaderBanner";
import ImgComp from "../components/ImgComp";
import styles from "../Stylez/StyleSheet";

const Registration = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View style={styles.imgContainer}>
            <ImgComp/>
        </View>
    )
}

export default Registration
