import React from 'react'
import { View, Button } from 'react-native'

const Btn = ({data}) => {
    return (
        <View>
            <Button 
            title="Click me" 
            onPress={() => alert(data.text)}
            />
        </View>
    )
}

export default Btn
