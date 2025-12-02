import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../theme';
export default function MemberHome(){ 
  return (
    <View style={{flex:1,backgroundColor:theme.colors.background,padding:20}}>
      <Text style={{color:theme.colors.gold,fontSize:22,fontWeight:'800'}}>Welcome, Member</Text>
      <Text style={{color:theme.colors.text,marginTop:12}}>Workout plans, progress tracking, bookings and more.</Text>
    </View>
  )
}
