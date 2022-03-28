import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import Login from './src/pages/Login';
import ProfileScreen from './src/pages/Profile';
import Mindgame from './src/pages/Mindgame';
import RockPaperScissors from './src/pages/RockPaperScissors';
import MemoryGame from './src/pages/MemoryGame';
import Games from './src/pages/Games';
import Brain from './src/pages/Brain';
import Forgot from './src/pages/Forgot';
import News from './src/pages/News';
import Register from './src/pages/Register';
import HomeScreen from './src/components/HomeScreen';
import GameScreen from './src/components/GameScreen';
import ScoreScreen from './src/components/ScoreScreen';
import CreditScreen from './src/components/CreditScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Jeux() {
  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'black' }} activeColor="white" >
      <Tab.Screen name="Games_info" component={Games}            //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="RockPaperScissors" component={RockPaperScissors}            //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hand" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="MemoryGame" component={MemoryGame}        // Search Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="eye" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Mindgame" component={Mindgame}      // Notification Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }} />

    </Tab.Navigator>
  );
}

function Tabstack() {
  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'black' }} activeColor="white" >
      <Tab.Screen name="Profile" component={ProfileScreen}            //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Brain" component={Brain}        // Search Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brain" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="News" component={News}      // Notification Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Games" component={Jeux}            // Profile Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="arrow-right-drop-circle-outline" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default class StimulBrain extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'toyzarux': require('./assets/TOYZARUX.ttf'),
      'georgia': require('./assets/Georgia.ttf'),
    });
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="News" component={Tabstack} options={{ headerShown: false }} />
          <Stack.Screen name="Brain" component={Tabstack} options={{ headerShown: false }} />
          <Stack.Screen name="Games" component={Tabstack} options={{ headerShown: false }} />
          <Stack.Screen name="RockPaperScissors" component={RockPaperScissors} />
          <Stack.Screen name="MemoryGame" component={MemoryGame} />
          <Stack.Screen name="Mindgame" component={Mindgame} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Score" component={ScoreScreen} />
          <Stack.Screen name="Credit" component={CreditScreen} />
          <Stack.Screen name="Games_info" component={Games} />
          <Stack.Screen name="Profile" component={Tabstack} options={{ headerShown: false }} />
          <Stack.Screen name="Tabstack" component={Tabstack} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent('StimulBrain', () => StimulBrain);