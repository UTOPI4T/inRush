import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { supabase } from '../supabase/SupabaseClient'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function SignAuth({navigation}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (fieldName, text) => {
    setFormData({ ...formData, [fieldName]: text });
  };
  
  const handleSignIn = async () => {
    const { username, email, password } = formData;
  
    if (!username || !email || !password) {
      Alert.alert(
        'Missing Information',
        'Please fill all the input fields.',
        [{ text: 'OK', onPress: () => console.log('Missing Information Alert Closed') }],
        { cancelable: false }
      );
      return;
    }
  
    try {
      const { user, error } = await supabase.auth.signUp({
        username,
        email,
        password,
      });
  
      if (error) {
        Alert.alert('Sign in failed', error.message);
      } else {
        Alert.alert('Sign in successful', `Welcome back, ${user.email}`);
        SignInSucceed();
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };


  const SignInSucceed = () => {
    navigation.navigate('PageAfterSignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, marginBottom:15}} >Sign In Authentication</Text>
      <TextInput
        placeholder='holding Full Name or Username'
        style={styles.txtInputs}
        onChangeText={(text) => handleInputChange('username', text)}
      />
       <TextInput
        placeholder='holding Email Address'
        keyboardType='email-address'
        style={styles.txtInputs}
        onChangeText={(text) => handleInputChange('email', text)}
      />
       <TextInput
        placeholder='holding Password'
        keyboardType='default'
        secureTextEntry={true}
        style={styles.txtInputs}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TouchableOpacity onPress={handleSignIn} >
        <View style={{backgroundColor:'#331b0b',borderRadius:20,padding:13, alignItems:'center', margin:15,}}>
            <Text style={styles.btnSignIn}> Sign In</Text>
        </View>
            
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#859e75',
    // margin:20,
    // alignItems: 'center',
    justifyContent: 'center',
    
  },
  txtInputs: {
    margin:10,
    borderWidth:1,
    padding:5,

  },
  btnSignIn: {
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
  }
});