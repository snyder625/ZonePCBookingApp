import { View, Text, Pressable, ImageBackground, Image, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Svg, Path, } from 'react-native-svg';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen')

function ReservationsBooking({navigation}) {

  const reviewRatings = [
    {
      name: 'Twix Cyber Club',
      date: 'Novermer 16',
      seat: '10',
      hours: '5H',
      price: 1500
    },
    {
      name: 'Twix Cyber Club',
      date: 'Novermer 16',
      seat: '10',
      hours: '5H',
      price: 1500
    },

  ]

  const pastReservation = [
    {
      name: 'Twix Cyber Club',
      date: 'Novermer 16',
      seat: '10',
      hours: '5H',
      price: 1500
    },
    {
      name: 'Twix Cyber Club',
      date: 'Novermer 16',
      seat: '10',
      hours: '5H',
      price: 1500
    },
    {
      name: 'Twix Cyber Club',
      date: 'Novermer 16',
      seat: '10',
      hours: '5H',
      price: 1500
    },
    {
      name: 'Twix Cyber Club',
      date: 'Novermer 16',
      seat: '10',
      hours: '5H',
      price: 1500
    },

  ];
  
  return (
    <View style={styles.container} resizeMode="cover">
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.upperCard}>
            <Text style={styles.cardHeading}>Total Bookings</Text>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 35, color: 'white', textAlign: 'center', textAlignVertical: 'center' }}>31</Text>
        </View>
        <View style={styles.upperCard}>
        <Text style={styles.cardHeading}>User Rank</Text>
        </View>
      </View>

      <View style={styles.middleContainer}>
         <Text style={styles.cardHeading}>Reviews & Ratings</Text>
         {reviewRatings.map((item) => (
            <View style={styles.middleCard}>
              <View style={{display: 'flex', flexDirection: 'row', marginVertical: '3%'}}>
                <Image source={require('../../assets/images/reservationsIcon.png')} style= {{borderRadius: 12}}/>
                <View style={{marginLeft: '5%'}} >
      
                  <Text style={styles.middleCardHeading}>{item.name}</Text>
                  <Text style={styles.middleCardText}>{item.date} / Seat - {item.seat} / {item.hours}</Text>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image style={{marginRight: '2%', marginTop: '1%'}} source={require('../../assets/images/T.png')} />
                    <Text style={styles.middleCardText}>{item.price}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.reverseBtn }>
                  <Image  source={require('../../assets/images/reverse.png')} />
                </TouchableOpacity>
              </View>
            </View>
         ))}
         
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.cardHeading}>Past Reservations</Text>
        {pastReservation.map((item) => (
            <View style={styles.middleCard}>
            <View style={{display: 'flex', flexDirection: 'row', marginVertical: '3%'}}>
           <Image source={require('../../assets/images/reservationsIcon.png')} style= {{borderRadius: 12}}/>
           <View style={{marginLeft: '5%'}} >
  
           <Text style={styles.middleCardHeading}>{item.name}</Text>
           <Text style={styles.middleCardText}>{item.date} / Seat - {item.seat} / {item.hours}</Text>
           <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image style={{marginRight: '2%', marginTop: '1%'}} source={require('../../assets/images/T.png')} />
           <Text style={styles.middleCardText}>{item.price}</Text>
           </View>
           </View>
           <TouchableOpacity style={styles.btn}>
           <Text style={styles.btnText}>Rebook</Text>
           </TouchableOpacity>
           </View>
           </View>
        ))}
        
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    width: width,
    height: height,
    backgroundColor: '#07161B',
    color: '#07161B',
  },
  cardHeading:{
    marginTop:'3%',
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PoppinsRegular'
  },
  upperCard: {
    height: 100,
    width: '40%',
    backgroundColor: '#0E252C',
    marginHorizontal: '2%',
    borderRadius: 12
  },
  middleContainer:{
    backgroundColor: '#0E252C',
    marginTop: '5%',
    width: '90%',
    borderRadius: 12
  },
  middleCard: {
    marginHorizontal: '3%'
  },
  middleCardHeading: {
    fontSize: 19,
    fontFamily: 'DMSansMedium',
    color: 'white'
  },
  middleCardText:{
    fontSize: 13,
    color: 'grey',
    fontFamily: 'DMSansRegular'
  },
  reverseBtn:{
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '4%'
  },
  btnText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'DMSansRegular'
  },
  btn: {

    fontSize: 17,
    height: 25,
    width: 55,
    backgroundColor: '#0BA89D',
    fontFamily: 'DMSansRegular',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: '3%'
  },
  
})

export default ReservationsBooking