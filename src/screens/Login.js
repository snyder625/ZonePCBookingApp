import { View, Image, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import React, {useCallback} from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

const Login = () => {

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
      <Image style={{alignSelf: 'center'}} source={require('../../assets/logo.png')}/>
      <Text style={login_style.heading}>Welcome to CyberSpot</Text>

      {/* <View style={login_style.inputContainer}><Text style={login_style.label}>USERNAME</Text>
      <TextInput
        style={login_style.input}
      /></View>
      

      <Text style={login_style.label}>PASSWORD</Text>
      <TextInput
        style={login_style.input}/> */}

    <View style={login_style.inputContainer}>
        <Text style={login_style.label}>Username</Text>
        <TextInput style={login_style.input} placeholder="Enter your username" placeholderTextColor='white'/>
      </View>

      <View style={login_style.inputContainer}>
        <Text style={login_style.label}>Password</Text>
        <TextInput style={login_style.input} placeholder="Enter your password" placeholderTextColor='white' secureTextEntry={true} />
      </View>

      <View style={login_style.checkboxContainer}>
        <Text style={login_style.checkboxLabel}>Remember me</Text>
        <Text style={login_style.forgotPasswordLabel}>Forgot password</Text>
      </View>

      <Pressable style={login_style.button} >
      <Text style={login_style.butonText}>Sign In</Text>
    </Pressable>

    <View style={login_style.textLineContainer}>
        <Text style={login_style.textLineText}>Don't have an account?</Text>
        <Text style={login_style.signUpLink}> Sign Up</Text>
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

inputContainer:{
  margin: 10
},
  heading: {
    
    fontSize: 24,
    lineHeight: 36,
    color: "white",
    fontWeight: "bold"
    

  },
  label: {
    fontSize: 13,
    lineHeight: 20,
    color: "#FFFFFF"
  },
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#FFFFFF"
  },


  inputContainer: {
    margin: 10,
  },
  label: {
    color: '#CDCDCD',
    marginLeft: 0, 
  },
  input: {
    width: 250, 
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 13,
    color: "#FFFFFF",
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
    width: 250,
    backgroundColor: '#0BA99F',
    borderRadius: 9,
    marginTop: 40,
    height: 50
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
    color: '#1DAEFF', 
  },

  
})

export default Login