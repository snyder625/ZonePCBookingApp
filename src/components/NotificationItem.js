import { View, Text, Image, StyleSheet } from 'react-native'

const NotificationItem = ({item}) => {
  return (
    <View style={styles.notification}>
        <Image source={item.image} />
        <View style={styles.notificationContent}>
            <Text style={{color: 'white', fontSize: 15, fontFamily: 'DMSansRegular', paddingRight: 12}}>{item.notification}</Text>
            <Text style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 13, fontFamily: 'DMSansRegular'}}>{item.time}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    notification: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 14,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(7, 70, 68, 1)',
    },
    notificationContent: {
      marginLeft: 6,
    }
})

export default NotificationItem