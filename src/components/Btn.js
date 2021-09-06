import React from 'react'
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../Stylez/StyleSheet";

const Btn = ({data}) => {
    return (
        <>
            <TouchableOpacity 
            style={styles.BtnStyle}
            onPress={() => alert(data.text)}
            >
                <Text>Registreer je hier!</Text>
            </TouchableOpacity>
        </>
    )
}

export default Btn
