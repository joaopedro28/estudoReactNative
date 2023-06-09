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
import OptionsPage from './src/screens/Options';


const Tab = createMaterialBottomTabNavigator();

const TabIcon = ({ name, color, focused }) => {
  const iconColor = focused ? color : '#00ddff';

  return (
    <MaterialCommunityIcons
      name={name}
      color={iconColor}
      size={26}
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

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
              backgroundColor: 'transparent',
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="home" backgroundColor='transparent'  color={color} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="React"
              component={ReactPage}
            options={{
              backgroundColor: 'transparent',
              tabBarLabel: 'React',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="react" color={color} size={26} style={{ backgroundColor: 'transparent' }} />
              ),
              tabBarColor: '#2b47e5'
            }} />
          <Tab.Screen
            name="Monografia"
            component={MonografiaPage}
            options={{
              tabBarLabel: 'Monografia',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book-open" color={color} size={26} style={{ backgroundColor: 'transparent' }} />
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
                <MaterialCommunityIcons name="api" color={color} size={26} style={{ backgroundColor: 'transparent' }} />
              ),
              tabBarColor: '#2b47e5'
            }}
          />
          <Tab.Screen
            name="Opções"
            component={OptionsPage}
            options={{
              tabBarLabel: 'Opções',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
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
