import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // Here you can perform any validation or further processing
    // For demonstration, let's just display the entered email and password in an alert
    Alert.alert(
      'Login Details',
      `Email: ${email}\nPassword: ${password}`,
      [
        { text: 'Cancel', onPress: () => console.log('Authentication Canceled'), style: 'cancel' },
        { text: 'OK', onPress: () => {
          console.log('OK Pressed');
          LogInSucceed();
        }}
      ],
      { cancelable: false }
    );
  }  

  const LogInSucceed = () => {
    navigation.navigate('PageAfterLogIn');
  };

  

  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',fontWeight:'bold', fontSize:20,marginBottom:15,}}>Log In Authentication</Text>
      
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

      <TouchableOpacity onPress={handleLogin}>
          <View style={{backgroundColor:'#331b0b',borderRadius:20,padding:13, alignItems:'center', margin:15,}}>
              <Text style={styles.btnSignIn}> Log In</Text>
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
