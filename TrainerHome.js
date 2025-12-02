import React from 'react';
import { View, Text } from 'react-native';
import theme from '../theme';
export default function TrainerHome(){ 
  return (
    <View style={{flex:1,backgroundColor:theme.colors.background,padding:20}}>
      <Text style={{color:theme.colors.gold,fontSize:22,fontWeight:'800'}}>Trainer Dashboard</Text>
      <Text style={{color:theme.colors.text,marginTop:12}}>Manage clients, assign plans, and monitor progress.</Text>
    </View>
  )
}
