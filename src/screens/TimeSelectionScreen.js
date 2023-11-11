import { View, Text, StyleSheet, Dimensions,ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { RadioButton } from 'react-native-paper';


const { width, height } = Dimensions.get('screen');

const TimeSelectionScreen = () => {
  const [checked, setChecked] = useState('Stripe');
  return (
  <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <View>
        <Image source={require('../../assets/images/pc.png')} />
        <Text style={styles.heading}>Seat-14</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText} >Time</Text>
        <TouchableOpacity style={styles.timeVariantBtn}>
        <Text style={styles.timeBtnText}>1 H</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeVariantBtn}>
        <Text style={styles.timeBtnText}>3 H</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeVariantBtn}>
        <Text style={styles.timeBtnText}>5 H</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeVariantBtn}>
        <Text style={styles.timeBtnText}>Day / Night</Text>
        </TouchableOpacity>

        <Text style={styles.lowerText}>Selected Time:</Text>
        <View style={{display:'flex', flexDirection: 'row'}}>
          <Text style={styles.lowerHeadText1}>5 H</Text><Text style={styles.lowerHeadText2}> - 1500</Text>
          <View style={{height: 30, width: 30}}>
          <Image style={{height: '100%', width: '100%', resizeMode: 'cover', marginTop: '6%'}} source={require("../../assets/images/T2.png")}/>
          </View>
          
        </View>
      </View>
    <View style={{display: "flex",width: '80%', marginTop: '4%', alignItems: 'flex-start', justifyContent:'flex-start', borderTopWidth: 1,
    borderColor: '#6D9EFF1A',
    width: '80%',
    paddingVertical: 5,
    marginBottom: 5,
    }}>
      <View style={styles.radioButtonStyle}>
        <RadioButton
          value="Stripe"
          status={checked === 'Stripe' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Stripe')}
          color='#FF8036'
        />
        <Image style={styles.paymentIcon} source={require('../../assets/images/stripe.png')} />
        <Text style={styles.radioText}>Stripe</Text>
      </View>

      <View style={styles.radioButtonStyle}>
        <RadioButton
          value="Kaspi"
          status={checked === 'Kaspi' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Kaspi')}
          color='#FF8036'
        />
        <Image style={styles.paymentIcon} source={require('../../assets/images/kaspi.png')} />
        <Text style={styles.radioText}>Kaspi</Text>
      </View>

      <View style={styles.radioButtonStyle}>
        <RadioButton
          value="Visa"
          status={checked === 'Visa' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Visa')}
          color='#FF8036'
        />
        <Image style={styles.paymentIcon} source={require('../../assets/images/Visa.png')} />
        <Text style={styles.radioText}>Visa</Text>
      </View>
      </View>

      <TouchableOpacity style={styles.timeVariantBtn}>
        <Text style={styles.timeBtnText}>Pay</Text>
        </TouchableOpacity>
      
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
  radioButtonStyle : {
    borderBottomWidth: 1,
    // borderTopWidth: 1,
    borderColor: '#6D9EFF1A',
    width: '100%',
    paddingVertical: 5,
    marginBottom: 5,
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  heading:{
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'PoppinsRegular'
  },
  card: {
    backgroundColor: "linear-gradient(90deg, rgba(7,70,68,1) 0%, rgba(7,27,24,1) 35%)",
    width: "80%",
    height: "42%",
    borderRadius: 20,
    marginTop: "5%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    color: "white",
    fontSize: 18,
    fontFamily: 'DMSansRegular',

  },
  timeBtnText: {
    color: '#FFFFFF', 
    fontFamily: 'DMSansRegular', 
    fontSize: 16,
    textAlign: 'center'
  },
  timeVariantBtn: {
    backgroundColor: '#0BA89D',
    padding: 12,
    width: "80%",
    borderRadius: 12,
    marginVertical: '2%'
  },
  lowerText: {
    color: 'white',
    fontSize: 13,
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
  TImage: {
    height: 30,
    width: 30
  },
  paymentIcon: {
    height: 30,
    width: 30,
    marginHorizontal: '4%'
  },
  radioText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'DMSansRegular',
    fontWeight: '500'
  }
})

export default TimeSelectionScreen