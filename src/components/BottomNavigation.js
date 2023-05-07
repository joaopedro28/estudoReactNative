
import HomePage from '../screens/HomePage';
import ReactPage from '../screens/ReactPage';
import MonografiaPage from '../screens/MonografiaPage';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();


const BottomNavigation = () => (
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
        </Tab.Navigator>
    </NavigationContainer>
)

export default BottomNavigation;