import { View, Text, Image, StyleSheet } from 'react-native'

const ProfileNotificationsData = [
    {
        image: require('../../assets/images/notification/img1.png'),
        notification: 'Cyber Spot',
        time: 'ss'
    },
    {
        imageUrl: require('../../assets/images/notification/img1.png'),
        title: '',
        content: ''
    },
];

const ProfileNotifications = () => {
  return (
    <View style={{alignItems: 'center', backgroundColor: '#0E252C', width: '90%', borderRadius: 24, padding: 12, marginTop: 24, marginBottom: 100}}>
        <Text style={{fontFamily: 'DMSansRegular', color: 'white'}}>Notifications</Text>
        {
            ProfileNotificationsData.map((data, index) => (
                <View style={styles.notification} key={index}>
                    <Image source={require('../../assets/images/notification/img6.png')} />
                    <View style={styles.notificationContent}>
                        <Text style={{color: 'white', fontSize: 15, fontFamily: 'DMSansRegular', paddingRight: 12}}>First-Timer</Text>
                        <Text style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 13, fontFamily: 'DMSansRegular'}}>Awarded on completing your first reservation.</Text>
                    </View>
                </View>
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    upperCard: {
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

export default ProfileNotifications