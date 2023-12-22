import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const pastReservation = [
  {
    imageUrl: require('../../assets/images/history/history1.png'),
    name: 'Twix Cyber Club',
    date: 'Novermer 16',
    seat: '10',
    hours: '5H',
    price: 1500
  },
  {
    imageUrl: require('../../assets/images/history/history2.png'),
    name: 'Twix Cyber Club',
    date: 'Novermer 16',
    seat: '10',
    hours: '5H',
    price: 1500
  },
  {
    imageUrl: require('../../assets/images/history/history3.png'),
    name: 'Twix Cyber Club',
    date: 'Novermer 16',
    seat: '10',
    hours: '5H',
    price: 1500
  },
];

const ReservationsScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#07161B', paddingVertical: 85}} contentContainerStyle={{alignItems: 'center', gap: 8, paddingBottom: 100}}>
      <Image source={require('../../assets/images/reservationImage.png')} style={{height: 175}} />
      <Text style={{color: 'white', fontSize: 32, fontFamily: 'DMSansMedium'}}>Twix Cyber Club</Text>
      <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 16, fontFamily: 'DMSansRegular', textAlign: 'center'}}>November 16 / Seat 14 {"\n"} 5H</Text>

      <View style={{width: '75%', borderWidth: 1, backgroundColor: '#0E252C', borderColor: '#0BA89D', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 8}}>
        <Text style={{color: 'white', fontSize: 48, fontFamily: 'PoppinsMedium'}}>14 M 12 S</Text>
      </View>

      <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 12, paddingVertical: 6}}>
        <View style={{width: '20%', backgroundColor: '#0E252C', borderWidth: 1, borderColor: '#0BA89D', height: 30, borderRadius: 24}}></View>
        <View style={{width: '20%', backgroundColor: '#0E252C', height: 30, borderRadius: 24}}></View>
        <View style={{width: '20%', backgroundColor: '#0E252C', height: 30, borderRadius: 24}}></View>
      </View>

      <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 17, fontFamily: 'DMSansRegular', textAlign: 'center'}}>Waiting for your arrival</Text>

      <View style={styles.middleContainer}>
        <Text style={styles.cardHeading}>Past Reservations</Text>
        {pastReservation.map((item, index) => (
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 12}} key={index}>
            <Image source={item.imageUrl} />
            <View>
              <Text style={{color: 'white', fontSize: 16, fontFamily: 'DMSansMedium'}}>{item.clubName}</Text>
              <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 14, fontFamily: 'DMSansRegular'}}>{item.date} / Seat - {item.seat} / {item.hours} </Text>
              <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 14, fontFamily: 'DMSansRegular'}}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.rebookBtn}>
              <Text style={{fontFamily: 'DMSansRegular', fontSize: 14, color: 'white'}}>Rebook</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardHeading:{
    marginTop:'3%',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PoppinsRegular'
  },
  middleContainer:{
    backgroundColor: '#0E252C',
    marginTop: '5%',
    width: '90%',
    borderRadius: 12,
    justifyContent: 'center',
  }, 
  rebookBtn: {
    backgroundColor: '#0BA89D',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16
  }
})

export default ReservationsScreen