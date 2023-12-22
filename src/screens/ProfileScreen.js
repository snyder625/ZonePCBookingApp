import { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import NotificationItem from '../components/NotificationItem';
import ProfileNotifications from '../components/ProfileNotifications';
import { useHeaderHeight } from '@react-navigation/elements';

const ProfileScreen = ({navigation}) => { 
  const headerHeight = useHeaderHeight();
  const [showHeaderTitle, setShowHeaderTitle] = useState(true);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowHeaderTitle(offsetY <= 0);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: showHeaderTitle ? 'Profile' : '',
    });
  }, [showHeaderTitle]);
  
  return (
    <ScrollView style={{backgroundColor: '#07161B', paddingTop: 85, width: '100%'}} contentContainerStyle={{alignItems: 'center'}} onScroll={handleScroll}>
        <ImageBackground source={require('../../assets/images/profile_xoxo.png')} style={{width: '100%', height: 110, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#fff', fontSize: 22, fontFamily: 'DMSansMedium'}}>SkilleXX0</Text>
            <TouchableOpacity style={{position: 'absolute', right: 10, backgroundColor: 'rgba(0, 0, 0, .55)', padding: 6, borderRadius: 100}} onPress={() => navigation.navigate('UpdateProfile')}>
                <MaterialIcons name="edit" size={24} color="white" />
            </TouchableOpacity>
        </ImageBackground>

        <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={styles.upperCard}>
                <Text style={styles.cardHeading}>Total hours</Text>
                <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 35, color: 'white', textAlign: 'center', textAlignVertical: 'center' }}>31</Text>
            </View>
            <View style={styles.upperCard}>
                <Text style={styles.cardHeading}>Total Money Spent</Text>
                <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 35, color: 'white', textAlign: 'center', textAlignVertical: 'center' }}>74.450</Text>
            </View>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity style={styles.upperCard} onPress={()=> navigation.navigate('History')}>
                <Text style={styles.cardHeading}>Last booking</Text>
                <ImageBackground source={require('../../assets/images/bookingImg.png')} style={{width: '100%', height: 40, alignItems: 'center', justifyContent: 'center', marginVertical: 12}}>
                    <Text style={{color: 'white', fontFamily: 'DMSansMedium'}}>Twix Cyber Club</Text>
                </ImageBackground>
                <Text style={styles.cardText}>Seat 14</Text>
                <Text style={{fontFamily: 'PoppinsMedium', fontSize: 18, color: 'rgba(255, 255, 255, 0.4)', textAlign: 'center', textAlignVertical: 'center' }}>November 16 {'\n'} 5H</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.upperCard, {justifyContent: 'space-between'}]} onPress={()=> navigation.navigate('FavoriteSpots')}>
                <Text style={styles.cardHeading}>Favorite Spots</Text>
                <Image source={require('../../assets/images/favoriteclub.png')} />
                <TouchableOpacity style={{backgroundColor: '#0BA89D', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 15, marginBottom: 15}}>
                    <Text style={{color: 'white', fontFamily: 'DMSansRegular'}}>Book</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>

        <View style={{marginVertical: 16, borderWidth: 1, borderColor: 'rgba(11, 168, 157, .45)', paddingHorizontal: 22, paddingVertical: 24, borderRadius: 100}}>
            <Text style={{color: 'white'}}>FAQ</Text>
        </View>

        <View style={{alignItems: 'center', backgroundColor: '#0E252C', width: '90%', borderRadius: 24, padding: 12}}>
            <Text style={{fontFamily: 'DMSansRegular', color: 'white'}}>Achievements</Text>
            <View style={styles.achievement}>
                <Image source={require('../../assets/images/notification/img6.png')} />
                <View style={styles.notificationContent}>
                    <Text style={{color: 'white', fontSize: 15, fontFamily: 'DMSansRegular', paddingRight: 12}}>First-Timer</Text>
                    <Text style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 13, fontFamily: 'DMSansRegular'}}>Awarded on completing your first reservation.</Text>
                </View>
            </View>
        </View>

        <ProfileNotifications />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    upperCard: {
        // height: 100,
        width: '45%',
        backgroundColor: '#0E252C',
        marginHorizontal: '2%',
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center',
    },
    cardHeading:{
        marginTop:'3%',
        fontSize: 13,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'PoppinsRegular'
    },
    cardText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    achievement: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
    },
    notification: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(7, 70, 68, 1)'
    },
    notificationContent: {
        marginLeft: 6,
    }
})

export default ProfileScreen