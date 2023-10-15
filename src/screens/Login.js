import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginSuccess } from '../redux/userSlice';

const {width, height} = Dimensions.get('screen')

const Login = ({navigation}) => {

  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState('')

  const handleInputChange = (text) => {
    setUserInput(text);
    // Check if the entered text contains the "@" symbol to identify it as an email
    if (text.includes('@')) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const submitHandler = () => {
    const apiUrl = 'https://cybersoft.cyclic.app/api/users/login';
  const data = {
    password: password, // Assuming the password is the entered value
  };

  // Check if it's an email or mobile number and set the data accordingly
  if (isEmail) {
    data.email = userInput;
  } else {
    data.mobileNumber = userInput;
  }

  axios.post(apiUrl, data)
    .then((response) => {
      console.log('Login successful:', response.data);
      dispatch(loginSuccess(response.data));
      navigation.navigate('Home')
    })
    .catch((error) => {
      dispatch(loginFailure());
      navigation.navigate('Signup');
      console.error('Login failed:', error);
    });
  }

  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <StatusBar style='light' />
      <Image style={{alignSelf: 'center'}} source={require('../../assets/images/logo.png')}/>
      <Text style={styles.heading}>Welcome to CyberSpot</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL OR MOBILE</Text>
        <TextInput
          style={styles.input}
          placeholder= "Enter email or mobile number"
          placeholderTextColor='rgba(255, 255, 255, 0.4)'
          value={userInput}
          onChangeText={handleInputChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor='rgba(255, 255, 255, 0.4)' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Remember me</Text>
        <Text style={styles.forgotPasswordLabel}>Forgot password</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={submitHandler}>
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
    // fontFamily: 'PoppinsSemiBold'
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
    // fontFamily: 'PoppinsMedium',
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
    // fontFamily: 'PoppinsRegular'
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

export default Login;