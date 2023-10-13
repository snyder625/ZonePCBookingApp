import { View, Image, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import React, {useCallback} from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FontAwesome } from '@expo/vector-icons';

// SplashScreen.preventAutoHideAsync();

const SignupMobile = () => {

  // const [fontsLoaded] = useFonts({
  //   'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={login_style.container}>
      <Image style={{alignSelf: 'center'}} source={require('../../assets/images/logo.png')}/>
      <Text style={login_style.heading}>Welcome to CyberSpot</Text>

    <View style={login_style.inputContainer}>
       
        <TextInput style={login_style.input} keyboardType='numeric' placeholderTextColor='#9E9E9E' placeholder="Enter mobile number"/>
      </View>


      <Pressable style={login_style.button} >
      <Text style={login_style.butonText}>Sign Up</Text>
    </Pressable>

    <View style={login_style.textLineContainer}>
        <Text style={login_style.textLineText}>Already have an account?</Text>
        <Text style={login_style.signUpLink}> Sign In</Text>
      </View>
    </View>
  )
}


const login_style = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: "black",
  width: '100%'
},


  heading: {
    
    fontSize: 24,
    lineHeight: 36,
    color: "white",
    fontWeight: "bold",
    marginBottom: 40

  },


  inputContainer: {
    marginTop: 40,
  },
  label: {
    color: '#CDCDCD',
    marginLeft: 0, 
  },
  input: {
    width: 300, 
    height: 60,
    borderWidth: 1,
    borderColor: '#0BA89D',
    borderRadius: 24,
    padding: 10,
    fontSize: 13,
    color: "#9E9E9E",
    marginTop: 5,
  },

  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250, 
  },
  checkboxLabelContainer: {
    flex: 1,
  },
  checkboxLabel: {
    color: 'white',
  },
  forgotPasswordLabel: {
    color: '#0BA99F',
    textAlign: 'right',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    backgroundColor: '#0BA99F',
    borderRadius: 24,
    marginTop: 40,
    height: 60
  },

  butonText: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontSize: 16
  },

  textLineContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10, 
  },
  textLineText: {
    color: '#81818A',
  },
  signUpLink: {
    color: '#0BA89D', 
  },

  
})

export default SignupMobile