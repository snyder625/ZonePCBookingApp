import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { HomeScreen, Login, SplashScreen, LoginAuthentication, Onboarding, Signup } from './src/screens';
import Verified from './src/screens/Verified';

const Stack = createStackNavigator();
// SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    // PoppinsBlack: require('./assets/fonts/Poppins-Black.ttf'),
    // PoppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    // PoppinsExtraLight: require('./assets/fonts/Poppins-ExtraLight.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
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
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name="Signin" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Authentication" component={LoginAuthentication} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Verified" component={Verified} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;