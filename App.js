import React, { useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { HomeScreen, Login, SplashScreen, LoginAuthentication, Onboarding, Signup, ClubDetails, StandardZone, Verified } from './src/screens';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    DMSansMedium: require('./assets/fonts/DMSans-Medium.ttf'),
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
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name="Signin" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Authentication" component={LoginAuthentication} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Verified" component={Verified} />
            <Stack.Screen name="ClubDetails" component={ClubDetails} 
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTintColor: '#FFFFFF',
                title: '',
                headerRight: ()=> (
                  <Pressable style={{marginRight: 12}}>
                    <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="StandardZone" component={StandardZone} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;