import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, FlatList, Dimensions, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import OnboardingComponent from '../components/OnboardingComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');

const onboardingData = [
    {
        "image": require('../../assets/images/reserve.png'),
        "title": "Reserve",
        "subtitle": "Instantly book your  seat at your favorite gaming club"
    },
    {
        "image": require('../../assets/images/play.png'),
        "title": "Play",
        "subtitle": "Experience uninterrupted gaming hours"
    },
    {
        "image": require('../../assets/images/conquer.png'),
        "title": "Conquer",
        "subtitle": "Showcase your skills and dominate"
    }
]

const Onboarding = ({navigation}) => {

  return (
    <ImageBackground source={require('../../assets/images/Background.png')} resizeMode='cover' style={styles.backgroundContainer}>
      <FlatList 
        data={onboardingData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={OnboardingComponent}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={"always"}
      />
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/Vector.png')} style={{ marginRight: 10 }} />
        <TextInput placeholder='Mobile number' placeholderTextColor='#9E9E9E' style={{ flex: 1, width: '90%' }} />
      </View>
      <TouchableOpacity style={styles.startButton} onPress={()=> navigation.navigate('Signin')}>
        <Text style={{color: '#fff', fontSize: 16}}>Get Started</Text>
      </TouchableOpacity>
      <Text style={{color: '#3D737F'}}>Already have an account? <Text style={{color: '#0BA89D', textDecorationLine: 'underline'}}>Login</Text></Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "flex-end", 
    backgroundColor: '#000', 
    gap: 20,
    height: height,
    width: width
  },
  inputContainer: {
    backgroundColor: '#07161B',
    width: '85%', 
    height: 50, 
    borderRadius: 15, 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12
  },
  startButton: {
    width: '85%', 
    height: 50, 
    backgroundColor: '#0BA89D', 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center'}
})

export default Onboarding