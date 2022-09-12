//Stack
//Tab
//Drawer

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DetailScreen from '../screens/DetailScreen';

const stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="HomeScreen" component={HomeScreen} />
                <stack.Screen name="ProductScreen" component={ProductScreen} />
                <stack.Screen name="DetailScreen" component={DetailScreen} />
            </stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;