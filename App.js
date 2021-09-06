import React from 'react';
import { View, SafeAreaView } from 'react-native';
import HeaderBanner from "./src/components/HeaderBanner";
import styles from "./src/Stylez/StyleSheet";
import Registration from "./src/views/Registration";

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <HeaderBanner/>
      <Registration/>
      {/*FOOTER*/}
    </View>
    </SafeAreaView>
  );
}

