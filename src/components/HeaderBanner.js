import React from 'react'
import { View, Text } from 'react-native'
import styles from "../Stylez/StyleSheet";
styles

const HeaderBanner = () => {
    return (
        <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>Registreer je nu voor de workshop op 21/11</Text>
        </View>
    )
}

export default HeaderBanner
