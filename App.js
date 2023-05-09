import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from './src/components/Header';

// Pages

import HomePage from './src/screens/HomePage';
import ReactPage from './src/screens/ReactPage';
import MonografiaPage from './src/screens/MonografiaPage';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RoutesPage from './src/screens/RoutesPage';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <Header title="App de Estudos" />

      <NavigationContainer>

        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          inactiveColor="#00ddff"
          barStyle={{ backgroundColor: '#2b47e5' }}
        >

          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" backgroundColor="transparent" color={color} size={26} />
              ),
              tabBarColor: '#2b47e5'
            }}
          />
          <Tab.Screen
            name="React"
            component={ReactPage}
            options={{
              tabBarLabel: 'React',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="react" color={color} size={26} backgroundColor="transparent" />
              ),
              tabBarColor: '#2b47e5'
            }} />
          <Tab.Screen
            name="Monografia"
            component={MonografiaPage}
            options={{
              tabBarLabel: 'Monografia',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book-open" color={color} size={26} backgroundColor="transparent" />
              ),
              tabBarColor: '#2b47e5'
            }}
          />
          <Tab.Screen
            name="Rotas Front-End"
            component={RoutesPage}
            options={{
              tabBarLabel: 'Rotas Front-End',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="api" color={color} size={26} backgroundColor="transparent" />
              ),
              tabBarColor: '#2b47e5'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

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
