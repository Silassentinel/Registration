import React, { useState } from 'react'
import { KeyboardAvoidingView, View, } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import styles from "../Stylez/StyleSheet";
import Btn from "./Btn";

const Input = () => {
    const [email, setemail] = useState("")
    return (
        <KeyboardAvoidingView style={styles.InputContainer}>
            <TextInput
            style={styles.Input}
            onChangeText={(text) => setemail({text})}
            autoCompleteType="email"
            autoFocus={true}
            placeholder="Vul hier jouw e-mail adres in"
            />
            <Btn
            data={email}
            />
        </KeyboardAvoidingView>
    )
}

export default Input
