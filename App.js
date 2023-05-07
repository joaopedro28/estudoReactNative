import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import BottomNavigation from './src/components/BottomNavigation';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <Header title="App de Estudos" />
      <BottomNavigation />
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
