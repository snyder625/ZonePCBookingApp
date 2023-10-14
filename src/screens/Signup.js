import React, {useState, useEffect} from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import axios from 'axios';

const {width, height} = Dimensions.get('screen')

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/users', {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
      });

      console.log('Registration success:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <Image style={{alignSelf: 'center'}} source={require('../../assets/images/logo.png')}/>
      <Text style={styles.heading}>Welcome to CyberSpot</Text>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>FULL NAME</Text>
        <TextInput style={styles.input} placeholder="Enter name" placeholderTextColor='rgba(255, 255, 255, 0.4)' value={name} onChangeText={(text) => setName(text)} />
      </View>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL ADDRESS</Text>
        <TextInput style={styles.input} keyboardType='email-address' placeholder="Enter username or email or mobile" placeholderTextColor='rgba(255, 255, 255, 0.4)' value={email} onChangeText={(text) => setEmail(text)} />
      </View>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>MOBILE NUMBER</Text>
        <TextInput style={styles.input} placeholder="Enter username or email or mobile" placeholderTextColor='rgba(255, 255, 255, 0.4)' keyboardType='numeric' value={mobileNumber} onChangeText={(text) => setMobileNumber(text)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor='rgba(255, 255, 255, 0.4)' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
      </View>

      <View style={styles.terms}>
  <Text style={styles.termsText}>
    I have read & agreed to CyberSpot{' '}
    <Text style={styles.linkText}>Privacy Policy, Terms & Condition</Text>
  </Text>
</View>

      <TouchableOpacity style={styles.button} onPress={submitHandler} >
        <Text style={styles.butonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.textLineContainer}>
        <Text style={styles.textLineText}>Already have an account? </Text>
        <Text style={styles.SignupUpLink}>Log in</Text>
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
    margin: 5,
  },
  label: {
    color: '#CDCDCD',
    marginLeft: 0, 
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
  },
  input: {
    width: 300, 
    height: 40,
    borderWidth: 1,
    borderColor: '#0BA89D',
    borderRadius: 5,
    padding: 10,
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.4)",
    marginTop: 5,
    fontFamily: 'PoppinsRegular'
  },

  terms: {
    flexDirection: 'row',
  justifyContent: 'center', 
  alignItems: 'center', 
  marginTop: 5,
  width: 300,
  },
  termsText: {
    color: 'rgba(61, 115, 127, 1)',
    fontSize: 10,
    fontFamily: 'PoppinsRegular', 
  },
  linkText: {
    color: 'rgba(11, 168, 157, 1)',
    fontSize: 10, 
    fontFamily: 'PoppinsRegular', 
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
    letterSpacing: 0.25,
    fontFamily: 'PoppinsSemiBold',
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
    color: 'rgba(61, 115, 127, 1)',
  },
  SignupUpLink: {
    color: 'rgba(11, 168, 157, 1)', 
  },

  
})

export default Signup