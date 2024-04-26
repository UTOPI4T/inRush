import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Log In Authentication</Text>
      <TextInput
        placeholder='holding Full Name'
        style={styles.txtInputs}
      />
       <TextInput
        placeholder='holding Email Address'
        keyboardType='email-address'
        style={styles.txtInputs}
      />
       <TextInput
        placeholder='holding Password'
        keyboardType='default'
        secureTextEntry={true}
        style={styles.txtInputs}
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#859e75',
    margin:20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  txtInputs: {
    margin:10,
    borderWidth:1,
    padding:5,

  }
});
