import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SplashScreen, LoginAuthentication, Onboarding, Signup, ClubDetails, StandardZone, Verified, MapScreen, TimeSelectionScreen, PaymentScreen, SuccessQRScreen, PaymentFailScreen, Notifications } from './src/screens';
import BottomTabBar from './BottomTabBar';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
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
  );
}

export default RootNavigator;