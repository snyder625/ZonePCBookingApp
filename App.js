import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/screens/Login"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';


// SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'PoppinsBlack': require('./assets/fonts/Poppins-Black.ttf'),
    'PoppinsBlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
    'PoppinsSemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'PoppinsExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'PoppinsExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    'PoppinsItalic': require('./assets/fonts/Poppins-Italic.ttf'),
    'PoppinsLight': require('./assets/fonts/Poppins-Light.ttf'),
    'PoppinsLightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsMediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'PoppinsSemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'PoppinsThin': require('./assets/fonts/Poppins-Thin.ttf'),
    'PoppinsThinItalic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
