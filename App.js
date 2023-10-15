import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import { HomeScreen, Login, LoginAuthentication, Onboarding, Signup } from './src/screens';

const Stack = createStackNavigator();
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    // PoppinsBlack: require('./assets/fonts/Poppins-Black.ttf'),
    // PoppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    // PoppinsExtraLight: require('./assets/fonts/Poppins-ExtraLight.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    // PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    console.log('Fonts Loading...');
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      console.log('Fonts Loaded');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signin" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Authentication" component={LoginAuthentication} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
