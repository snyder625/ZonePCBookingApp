import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');
const PaymentScreen = () => {
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <View>
        <Image source={require('../../assets/images/pc.png')} />
        <Text style={styles.heading}>Seat-14</Text>
      </View>

      <View style={{display: "flex", flexDirection: 'row', marginTop: '5%'}}>
      <Text style={styles.lowerHeadText1}>5 H</Text><Text style={styles.lowerHeadText2}> - 1500</Text>
      <Image style={{marginLeft: '3%'}} source={require('../../assets/images/T2.png')} />
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.timeVariantBtn}>
        <Text style={styles.timeBtnText}>Перейти к оплате</Text><Image style={{marginHorizontal: '4%'}} source={require('../../assets/images/kaspi_yellow.png')} />
        <Text style={styles.timeBtnText2} >Kaspi.kz</Text>
        </TouchableOpacity>
        <Text style={styles.cardText} >Нажмите на кнопку, для перехода к оплате</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: '10%'}} >
        <Text style={styles.cardTextHead} >1500</Text>
        <Image style={{height: 50, width: 50}} source={require('../../assets/images/T2.png')} />
        </View>

      </View>
      
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: '#07161B',
    // position: 'relative'
  },
  heading:{
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'PoppinsRegular'
  },
  lowerHeadText1: {
    fontSize: 27,
    color: '#0BA89D',
    fontFamily: 'DMSansRegular'
  },
  lowerHeadText2: {
    fontSize: 27,
    color: 'white',
    fontFamily: 'DMSansRegular'
  },
  card: {
    backgroundColor: "linear-gradient(90deg, rgba(7,70,68,1) 0%, rgba(7,27,24,1) 35%)",
    width: "90%",
    height: "30%",
    borderRadius: 20,
    marginTop: "20%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    color: "white",
    fontSize: 13,
    fontFamily: 'DMSansRegular',
    width: '90%',
    textAlign: 'center'

  },
  cardTextHead: {
    color: "white",
    fontSize: 40,
    // fontWeight: '500',
    fontFamily: 'DMSansMedium',
    textAlign: 'center'

  },
  timeBtnText: {
    color: '#FFFFFF', 
    fontFamily: 'DMSansRegular', 
    fontSize: 16,
    textAlign: 'center',
   
  },
  timeBtnText2: {
    color: '#FFFFFF', 
    fontFamily: 'DMSansRegular', 
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700'
  },
  timeVariantBtn: {
    backgroundColor: '#0BA89D',
    padding: 12,
    width: "90%",
    borderRadius: 12,
    marginVertical: '2%',
    height:'20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default PaymentScreen