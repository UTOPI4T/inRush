import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  }

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  
  const handleSignIn  = () => {
    Alert.alert(
      'Login Details',
      `Username: ${username}\nEmail: ${email}\nPassword: ${password}`,
      [
        { text: 'Cancel', onPress: () => console.log('Authentication Canceled'), style: 'cancel' },
        { text: 'OK', onPress: () => {
          console.log('OK Pressed');
          SignInSucceed();
        }}
      ],
      { cancelable: false }
      );
  }


  const SignInSucceed = () => {
    navigation.navigate('PageAfterSignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, marginBottom:15}} >Sign In Authentication</Text>
      <TextInput
        placeholder='holding Full Name or Username'
        style={styles.txtInputs}
        onChangeText={handleUsernameChange}
      />
       <TextInput
        placeholder='holding Email Address'
        keyboardType='email-address'
        style={styles.txtInputs}
        onChangeText={handleEmailChange}
      />
       <TextInput
        placeholder='holding Password'
        keyboardType='default'
        secureTextEntry={true}
        style={styles.txtInputs}
        onChangeText={handlePasswordChange}
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
