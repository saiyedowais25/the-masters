import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import theme from '../theme';

export default function LoginScreen({navigation}){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('member'); // 'member' or 'trainer'

  const onLogin = ()=>{
    if(role==='trainer') navigation.replace('TrainerHome');
    else navigation.replace('MemberHome');
  };

  return (
    <View style={{flex:1,backgroundColor:theme.colors.background,alignItems:'center',justifyContent:'center',padding:20}}>
      <Text style={{color:theme.colors.gold,fontSize:30,fontWeight:'800',marginBottom:6}}>The Master's</Text>
      <Text style={{color:theme.colors.muted,marginBottom:20}}>Destination of fitness</Text>
      <TextInput placeholder='Email' placeholderTextColor={theme.colors.muted} value={email} onChangeText={setEmail} style={{width:'100%',padding:12,backgroundColor:theme.colors.card,color:theme.colors.text,borderRadius:8,marginBottom:12}} />
      <TextInput placeholder='Password' placeholderTextColor={theme.colors.muted} value={password} onChangeText={setPassword} secureTextEntry style={{width:'100%',padding:12,backgroundColor:theme.colors.card,color:theme.colors.text,borderRadius:8,marginBottom:12}} />
      <View style={{flexDirection:'row',marginBottom:12}}>
        <TouchableOpacity onPress={()=>setRole('member')} style={{padding:10,backgroundColor: role==='member'?theme.colors.gold:theme.colors.card, marginRight:8, borderRadius:8}}>
          <Text style={{color: role==='member'?'#000':theme.colors.text}}>Member</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setRole('trainer')} style={{padding:10,backgroundColor: role==='trainer'?theme.colors.gold:theme.colors.card, borderRadius:8}}>
          <Text style={{color: role==='trainer'?'#000':theme.colors.text}}>Trainer</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onLogin} style={{padding:12,backgroundColor:theme.colors.gold,width:'100%',alignItems:'center',borderRadius:8}}>
        <Text style={{fontWeight:'800'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
