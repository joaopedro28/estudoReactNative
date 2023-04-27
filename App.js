import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from './src/components/Header';
import Accordion from './src/components/Accordion';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="React-Native" />
      <ScrollView>
        <Accordion />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
