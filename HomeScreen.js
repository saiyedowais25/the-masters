import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../theme';
export default function HomeScreen({navigation}){
  return (
    <View style={{flex:1,backgroundColor:theme.colors.background,padding:20}}>
      <Text style={{color:theme.colors.gold,fontSize:22,fontWeight:'800'}}>The Master's</Text>
      <Text style={{color:theme.colors.muted,marginTop:8}}>Destination of fitness</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginTop:20,padding:12,backgroundColor:theme.colors.card,borderRadius:8}}>
        <Text style={{color:theme.colors.text}}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  )
}
