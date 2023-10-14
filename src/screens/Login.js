import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen')

const Login = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <StatusBar style='light' />
      <Image style={{alignSelf: 'center'}} source={require('../../assets/images/logo.png')}/>
      <Text style={styles.heading}>Welcome to CyberSpot</Text>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>USERNAME</Text>
        <TextInput style={styles.input} placeholder="Enter username or email or mobile" placeholderTextColor='rgba(255, 255, 255, 0.4)'/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor='rgba(255, 255, 255, 0.4)' secureTextEntry={true} />
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
        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
          <Text style={styles.signUpLink}> Sign Up</Text>
        </TouchableOpacity>
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

  inputContainer: {
    margin: 10,
  },
  label: {
    color: '#CDCDCD',
    marginLeft: 0, 
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    letterSpacing: 4
  },
  input: {
    width: 300, 
    height: 48,
    borderWidth: 1,
    borderColor: '#0BA89D',
    borderRadius: 5,
    padding: 10,
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.4)",
    marginTop: 5,
    fontFamily: 'PoppinsRegular'
  },

  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300, 
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
    borderRadius: 9,
    marginTop: 40,
    height: 50
  },

  butonText: {
    lineHeight: 21,
    fontWeight: '600',
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