import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { supabase } from './supabase/SupabaseClient';

// const navigation = useNavigation();
const LandingPage = ({navigation}) => {
    
    const navigateToSignIn = () => {
        navigation.navigate('SignIn');
      };
    
      const navigateToLogIn = () => {
        navigation.navigate('LogIn');
      };
    
    const login = async () => {
        await supabase.auth.signInWithPassword({
            provider:'Google'
        })
    }
  return (
    <View style={styles.container}>
        <View style={styles.firstTitle}>
            <Text style={{
            fontWeight:'bold',
            fontSize:32,
            color:'#331b0b', // #331b0b
            // textShadowColor: '#f1f1f1',  // Set the shadow color to match the text color
            // textShadowOffset: { width: 0, height: 1 }, // Set the shadow offset to create a stroke effect
            // textShadowRadius: 0.7, // Set the shadow radius for the stroke thickness
            }}>Authentication Test</Text>
        </View>
        <View style={{flex:1, alignItems:'center', paddingVertical:60,}}>
            <Image
            source={require('../assets/adaptive-icon.png')} // Use require for local images
            style={{ width: 330, height: 330 }} // Set width and height for the image
            />
        </View>
        <View style={{flex:1,padding:10, marginTop:30}}>
            <TouchableOpacity onPress={navigateToSignIn}>
            <View style={{backgroundColor:'#331b0b',borderRadius:20,padding:13,}}>
                <Text style={styles.btnSignIn}> Sign In</Text>
            </View>
            
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:10, }}>
            <Text style={{ fontSize:12,color:'#fefefe'}}> Already have an account?</Text>
            <TouchableOpacity onPress={navigateToLogIn}>
                <Text style={{fontSize:12, color:'#331b0b', fontWeight:'bold'}}> Log In</Text>
            </TouchableOpacity>
            </View>  

            <TouchableOpacity onPress={login}>
                <Text> Sign in with Google</Text>
            </TouchableOpacity>
        </View>
        
        <StatusBar style='light-content' />
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#859e75',
        // margin:20,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    firstTitle:{
        alignItems:'center',
        marginTop:30,
    },

    btnSignIn: {
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }
})