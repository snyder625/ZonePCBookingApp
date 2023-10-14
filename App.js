import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, OTPScreen, Onboarding, Signup } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsBlack: require('./assets/fonts/Poppins-Black.ttf'),
    'PoppinsBlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
    'PoppinsSemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'PoppinsExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsItalic': require('./assets/fonts/Poppins-Italic.ttf'),
    'PoppinsLight': require('./assets/fonts/Poppins-Light.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Hide the splash screen if fonts are loaded.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Authentication" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
