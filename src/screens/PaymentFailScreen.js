import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');
const PaymentFailScreen = () => {
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <Text style={styles.failText} >Failed</Text>
      <View style={{marginTop: '8%'}}>
        <Text style={styles.cardText}>Oops,</Text>
        <Text style={styles.cardText}>Something went wrong</Text>
      </View>
      <TouchableOpacity><Text style={styles.retryLink} >Retry</Text></TouchableOpacity>
      <View style={{width: '70%', display: 'flex', justifyContent: 'flex-end', height: '40%'}}>
      <Text style={styles.endText}>You don't think this was an issue?</Text>
      <Text style={styles.endText}>Contact the Manager!</Text>

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
  failText: {
    fontSize: 33,
    color: '#D0313180',
    fontFamily: 'DMSansBold'
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: 'DMSansRegular',
    textAlign: 'center',
    marginVertical: '0.5%'

  },
  endText: {
    color: "#EAEAEACC",
    fontSize: 13,
    fontFamily: 'DMSansRegular',
    textAlign: 'center',
    marginVertical: '0.5%'

  },
  retryLink: {
    fontSize: 19,
    color: '#0BA89D',
    fontFamily: 'DMSansRegular',
    marginTop: '20%'
  }
})
export default PaymentFailScreen