import { View, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ReservationsScreen } from '../screens';

import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ReservationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Reservations' component={ReservationsScreen} 
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerRight: ()=> (
              <Pressable style={{marginRight: 12, backgroundColor: '#000000', padding: 5, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
              </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const CustomTabBarButton = ({ accessibilityState, children, onPress }) => {
  const focused = accessibilityState ? accessibilityState.selected : false;

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#074644',
      }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

function BottomTabBar() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ 
        headerShown: false,
        showLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12
        }
      }}
      tabBar={(props) => (
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            elevation: 2,
          }}
        >
          <CustomTabBarButton
            {...props}
            accessibilityLabel="Leaderboard"
            onPress={() => props.navigation.navigate('Leaderboard')}
          >
            <FontAwesome5 name="medal" size={30} color={props.accessibilityState?.selected ? 'pink' : 'white'} />
          </CustomTabBarButton>

          <CustomTabBarButton
            {...props}
            accessibilityLabel="Home"
            onPress={() => props.navigation.navigate('HomeScreen')}
          >
            <Image source={require('../../assets/images/Home.png')} />
          </CustomTabBarButton>

          <CustomTabBarButton
            {...props}
            accessibilityLabel="Reservation"
            onPress={() => props.navigation.navigate('Reservation')}
          >
            <FontAwesome5 name="tv" size={26} color={props.accessibilityState?.selected ? 'pink' : 'white'} />
          </CustomTabBarButton>
        </View>
      )}
    >
      <Tab.Screen name="Leaderboard" component={HomeScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Reservation" component={ReservationStack} 
        options={{
          headerRight: ()=> (
            <Pressable style={{marginRight: 12}}>
              <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
            </Pressable>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar;
