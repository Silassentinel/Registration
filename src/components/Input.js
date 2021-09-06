import React, { useState } from 'react'
import { View, } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import styles from "../Stylez/StyleSheet";
import Btn from "./Btn";

const Input = () => {
    const [email, setemail] = useState("")
    return (
        <View style={styles.InputContainer}>
            <TextInput
            style={styles.Input}
            placeholder="Vul hier jouw e-mail adres in"
            onChangeText={(text) => setemail({text})}
            />
            <Btn
            data={email}
            />
        </View>
    )
}

export default Input
