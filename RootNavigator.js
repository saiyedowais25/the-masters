import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import TrainerHome from '../screens/TrainerHome';
import MemberHome from '../screens/MemberHome';

const Stack = createNativeStackNavigator();

export default function RootNavigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='TrainerHome' component={TrainerHome} />
        <Stack.Screen name='MemberHome' component={MemberHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
