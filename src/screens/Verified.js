import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginSuccess } from '../redux/userSlice';

const { width, height } = Dimensions.get('screen');

const Verified = ({ navigation }) => {
 

  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <StatusBar style='light' />
      <View style={styles.card}>
        <Image source={require('../../assets/images/checkIcon.png')} />
        <Text style={styles.heading}>Success</Text>
        <Text style={styles.content}>Congratulations, you have completed your registration!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.butonText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
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

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#0BA99F',
    borderRadius: 9,
    marginTop: 40,
    height: 50,
  },

  butonText: {
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
    fontSize: 16,
  },

  inputContainer: {
    margin: 10,
  },

  card: {
    height: '40%',
    width: '70%',
    backgroundColor: "#085956",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    fontFamily: "PoppinsMedium",
  },

  content: {
    fontSize: 12,
    color: '#B8B8D2',
    textAlign: "center",
    marginHorizontal: 15,
    marginTop: 20,
  },
});

export default Verified;
