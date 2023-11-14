import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'

const filters = ['Standard', 'VIP', 'Premium'];
const options = [
  {
    icon: '',
    option: 'Available',
    color: '#4BB468'
  },
  {
    icon: '',
    option: 'Reserved',
    color: '#D03131'
  },
  {
    icon: '',
    option: 'Selected',
    color: '#FFFFFF'
  }
];

const MapScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{maxHeight: 50, marginVertical: 16, position: 'absolute', top: 25}}>
        {
          filters.map((item, index)=> {
            return (
              <TouchableOpacity key={index} style={{display: 'flex', paddingHorizontal: 16, paddingVertical: 6, backgroundColor: '#074644', marginRight: 6, borderRadius: 48, justifyContent: 'center'}}>
                <Text style={{color: 'white', fontFamily: 'PoppinsLight'}}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

      <Image source={require('../../assets/images/map.png')} style={{marginBottom: 6}}/>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{maxHeight: 40, marginVertical: 8}}>
        {
          options.map((option, index)=> {
            return (
              <TouchableOpacity key={index} style={{paddingVertical: 6, marginHorizontal: 12}}>
                <Text style={{color: option.color, fontFamily: 'PoppinsLight'}}>{option.option}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

      <View style={{backgroundColor: '#074644', width: '70%', alignItems: 'center', gap: 4, paddingVertical: 16, elevation: 4, borderRadius: 16}}>
        <Text style={{color: 'white', fontFamily: 'PoppinsMedium', fontSize: 18}}>Selected Seat - 14</Text>
      </View>

      <View style={{backgroundColor: '#074644', width: '70%', alignItems: 'center', gap: 4, paddingVertical: 16, elevation: 4, borderRadius: 16}}>
        <Text style={{color: 'white', fontFamily: 'DMSansRegular', fontSize: 18}}>Standard Zone</Text>
        <Text style={{color: '#4BB468', fontSize: 13, fontFamily: 'PoppinsRegular'}}>Available</Text>
      </View>

      <TouchableOpacity style={styles.reserveNowButton} onPress={()=> navigation.navigate('Payment')}>
          <Text style={{color: '#FFFFFF', fontSize: 20, fontFamily: 'PoppinsRegular'}}>Pay</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#07161B',
    position: 'relative',
    gap: 16,
    paddingBottom: 16
  },
  reserveNowButton: {
    backgroundColor: '#0BA89D',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
})

export default MapScreen