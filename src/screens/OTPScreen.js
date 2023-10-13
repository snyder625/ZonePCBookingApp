import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const OTPScreen = () => {
  // Define the OTP as an array of integers
  const [otp, setOTP] = useState([null, null, null, null]);

  const handleKeyPress = (key) => {
    const newOTP = [...otp];
    const index = newOTP.findIndex((value) => value === null);
    if (index !== -1) {
      newOTP[index] = parseInt(key, 10); // Parse the key as an integer
      setOTP(newOTP);
    }
  };

  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      {/* Logo */}
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

      {/* Heading */}
      <Text style={styles.heading}>Verification Code</Text>

      {/* OTP Input Boxes */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={value === null ? '' : value.toString()}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>

      {/* Keypad */}
      <View style={styles.keypad}>
        <View style={styles.keypadRow}>
          {['1', '2', '3'].map((key) => (
            <KeyButton key={key} text={key} onPress={() => handleKeyPress(key)} />
          ))}
        </View>
        <View style={styles.keypadRow}>
  {['4', '5', '6'].map((key) => (
    <KeyButton key={key} text={key} onPress={() => handleKeyPress(key)} />
  ))}
</View>
        <View style={styles.keypadRow}>
          {['7', '8', '9'].map((key) => (
            <KeyButton key={key} text={key} onPress={() => handleKeyPress(key)} />
          ))}
        </View>
        <View style={styles.keypadRow}>
          <KeyButton text="0" onPress={() => handleKeyPress('0')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const KeyButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.keyButton} onPress={onPress}>
    <Text style={styles.keyButtonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: '#07161B',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  keypad: {
    marginTop: 20,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  keyButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  keyButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default OTPScreen;
