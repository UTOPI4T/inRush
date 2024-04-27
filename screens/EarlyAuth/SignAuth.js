import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App({navigation}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (fieldName, text) => {
    setFormData({ ...formData, [fieldName]: text });
  };
  
  const handleSignIn = () => {
    const { username, email, password } = formData;
  
    if (!username || !email || !password) {
      // Alert user if any of the required fields is empty
      Alert.alert(
        'Missing Information',
        'Please fill in both email and password fields.',
        [
          { text: 'OK', onPress: () => console.log('Missing Information Alert Closed') }
        ],
        { cancelable: false }
      );
      return;
    }
  
    // Display login details only if at least one field is filled
    Alert.alert(
      'Login Details',
      `Isername: ${username}\nEmail: ${email}\nPassword: ${password}`,
      [
        { text: 'Cancel', onPress: () => console.log('Authentication Canceled'), style: 'cancel' },
        { text: 'OK', onPress: () => {
          console.log('OK Pressed');
          SignInSucceed();
        }}
      ],
      { cancelable: false }
    );
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
