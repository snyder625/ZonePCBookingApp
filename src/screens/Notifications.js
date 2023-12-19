import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import NotificationItem from '../components/NotificationItem'

const notifications = [
  {
    image: require('../../assets/images/notification/img1.png'),
    notification: 'Available seat at Senior Cyber Club',
    time: 'Today at 3:45 PM'
  },
  {
    image: require('../../assets/images/notification/img2.png'),
    notification: 'You have 10 minutes left before your session!',
    time: 'Today at 1:25 PM'
  },
  {
    image: require('../../assets/images/notification/img3.png'),
    notification: 'We have a new partner, Panda Cyber Club!',
    time: 'Yesterday at 8:59 PM'
  },
  {
    image: require('../../assets/images/notification/img4.png'),
    notification: 'Here’s your statistics for this month!',
    time: 'Yesterday at 6:31 PM'
  },
  {
    image: require('../../assets/images/notification/img5.png'),
    notification: 'It’s been a while, let’s book at some place',
    time: 'Yesterday at 3:54 PM'
  },
  {
    image: require('../../assets/images/notification/img6.png'),
    notification: 'You got a new achievement!',
    time: 'October 15 2023'
  }
]

const Notifications = () => {
  return (
    <View style={styles.notificationsContainer}>
      <View style={styles.notificationsWrapper}>
        <FlatList 
          data={notifications}
          keyExtractor={(_, i)=> i.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=> <NotificationItem item={item} />}
          ListFooterComponent={<View style={{height: 75}} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  notificationsContainer: {
    flex: 1,
    backgroundColor: '#0E252C',
  },
  notificationsWrapper: {
    backgroundColor: 'rgba(7, 70, 68, 0.6)', 
    marginTop: 90, 
    marginHorizontal: 16, 
    borderRadius: 12,
    overflow: 'hidden',
  },
})

export default Notifications