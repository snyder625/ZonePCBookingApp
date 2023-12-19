import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Reservations } from '../screens';
import { View, Image, Pressable } from 'react-native';

const Tab = createBottomTabNavigator();

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
            <Image source={require('../../assets/images/Leaderboard.png')} />
          </CustomTabBarButton>

          <CustomTabBarButton
            {...props}
            accessibilityLabel="Home"
            onPress={() => props.navigation.navigate('Home')}
          >
            <Image source={require('../../assets/images/Home.png')} />
          </CustomTabBarButton>

          <CustomTabBarButton
            {...props}
            accessibilityLabel="Reservation"
            onPress={() => props.navigation.navigate('Reservation')}
          >
            <Image source={require('../../assets/images/Reservation.png')} />
          </CustomTabBarButton>
        </View>
      )}
    >
      <Tab.Screen name="Leaderboard" component={HomeScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Reservation" component={Reservations} />
    </Tab.Navigator>
  );
}

export default BottomTabBar;
