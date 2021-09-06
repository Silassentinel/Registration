import React from 'react';
import { View, SafeAreaView, useWindowDimensions } from 'react-native';
import styles from "./src/Stylez/StyleSheet";
import Registration from "./src/views/Registration";

export default function App() {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Registration />
      </SafeAreaView>
      </View>
  );
}

