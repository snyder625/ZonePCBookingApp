import React from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen')

const Login = () => {

  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <Image style={{alignSelf: 'center'}} source={require('../../assets/logo.png')}/>
      <Text style={styles.heading}>Welcome to CyberSpot</Text>

      {/* <View style={login_style.inputContainer}><Text style={login_style.label}>USERNAME</Text>
      <TextInput
        style={login_style.input}
      /></View>
      

      <Text style={login_style.label}>PASSWORD</Text>
      <TextInput
        style={login_style.input}/> */}

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter your username" placeholderTextColor='white'/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" placeholderTextColor='white' secureTextEntry={true} />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Remember me</Text>
        <Text style={styles.forgotPasswordLabel}>Forgot password</Text>
      </View>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.butonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.textLineContainer}>
        <Text style={styles.textLineText}>Don't have an account?</Text>
        <Text style={styles.signUpLink}> Sign Up</Text>
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: width,
  height: height,
  backgroundColor: '#07161B',
},

inputContainer:{
  margin: 10
},
  heading: {
    fontSize: 24,
    lineHeight: 36,
    color: "white",
    fontFamily: 'PoppinsSemiBold'
  },
  label: {
    fontSize: 13,
    lineHeight: 20,
    color: "#FFFFFF"
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#FFFFFF",
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