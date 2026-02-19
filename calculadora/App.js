import React, {useMemo,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import CalcButton from './components/CalcButton';
import Display from  "./components/Display";
import{ theme } from "./theme/token";
import createEngine from "./utils/calcEngine";


export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = themes[mode];
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
