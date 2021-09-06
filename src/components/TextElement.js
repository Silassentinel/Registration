import React from 'react'
import { View, Text } from 'react-native'
import styles from "../Stylez/StyleSheet";

const TextElement = () => {
    return (
        <View style={styles.TextElementContainer}>
            <Text style={styles.TextStyle}>Dag van de ambacht!</Text>
            <Text style={styles.TextStyle}>Leer stoferen van een erkende ambachtsman</Text>
            <Text style={styles.TextStyle}>Dag van de ambacht!</Text>
            <Text style={styles.TextStyle}>Kloosterstraat 2, Zele, 9240</Text>
        </View>
    )
}

export default TextElement
