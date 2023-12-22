import React, { useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { Login, SplashScreen, LoginAuthentication, Onboarding, Signup, ClubDetails, StandardZone, Verified, MapScreen, TimeSelectionScreen, PaymentScreen, SuccessQRScreen, PaymentFailScreen, Notifications, FavoriteSpots, RatingScreen, ProfileScreen, ReservationsBooking, UpdateProfileScreen, History } from './src/screens';
import { StatusBar } from 'expo-status-bar';
import BottomTabBar from './src/navigation/BottomTabBar';

const Stack = createStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    DMSansMedium: require('./assets/fonts/DMSans-Medium.ttf'),
    DMSansBold: require('./assets/fonts/DMSans-Bold.ttf'),
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
            <Stack.Screen name="Home" component={BottomTabBar} />
            <Stack.Screen name="Notification" component={Notifications} 
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTintColor: '#FFFFFF',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontFamily: 'DMSansBold'
                },
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12, backgroundColor: '#000000', padding: 5, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="History" component={History}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTintColor: '#FFFFFF',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontFamily: 'DMSansBold'
                },
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12, backgroundColor: '#000000', padding: 5, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="FavoriteSpots" component={FavoriteSpots}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: '',
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12, backgroundColor: '#000000', padding: 5, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="Verified" component={Verified} />
            <Stack.Screen name="Rating" component={RatingScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTintColor: '#FFFFFF',
                headerTitleAlign: 'center',
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12, backgroundColor: '#000000', padding: 5, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTintColor: '#FFFFFF',
              title: '',
              
              headerLeft: (props)=> (
                <Pressable {...props} style={{ marginLeft: 12 }}>
                  <Ionicons name="chevron-back" size={24} color="white" />
                </Pressable>
              )
            }} />
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
                ),
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12 }}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="ReservationsBooking" component={ReservationsBooking} 
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTintColor: '#FFFFFF',
                title: '',
                headerRight: ()=> (
                  <Pressable style={{marginRight: 12}}>
                    <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
                  </Pressable>
                ),
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12 }}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="StandardZone" component={StandardZone} 
              options={{
                headerShown: true,
                title: '',
                headerTransparent: true,
                headerTintColor: '#FFFFFF',
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12 }}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="Map" component={MapScreen} 
              options={{
                headerShown: true,
                title: '',
                headerTransparent: true,
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12 }}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="TimeSelection" component={TimeSelectionScreen} 
              options={{
                headerShown: true,
                title: '',
                headerTransparent: true,
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12 }}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="Payment" component={PaymentScreen} 
              options={{
                headerShown: true,
                title: '',
                headerTransparent: true,
                headerLeft: (props)=> (
                  <Pressable {...props} style={{ marginLeft: 12 }}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </Pressable>
                )
              }}
            />
            <Stack.Screen name="SuccessQR" component={SuccessQRScreen} />
            <Stack.Screen name="PaymentFailure" component={PaymentFailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;