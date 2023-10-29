import { ImageBackground, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen')

const SplashScreen = ({navigation}) => {

    useEffect(() => {
      setTimeout(() => {
        AsyncStorage.getItem('userToken').then(value => {
          if (value) {
            navigation.replace('Home')
          } else {
              navigation.replace('Onboarding')
            }
          })
      }, 2000);
    }, []);

  return (
    <ImageBackground source={require('../../assets/images/Background.png')} resizeMode='cover' style={styles.backgroundContainer}>
      <Image source={require('../../assets/images/logo.png')} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: '#07161B', 
    gap: 20,
    height: height,
    width: width
  },
})

export default SplashScreen