import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen