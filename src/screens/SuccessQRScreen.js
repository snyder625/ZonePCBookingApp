import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import QRCode from 'react-native-qrcode-svg';

const SuccessQRScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode='cover'>
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.subtitle}>MY QR Code</Text>
      <View style={{backgroundColor: 'white', padding: 12, borderRadius: 12, marginBottom: 6}}>
        <QRCode
          value="4712"
          color={'#000000'}
          backgroundColor={'white'}
          size={250}
          logoMargin={2}
          logoSize={20}
          logoBorderRadius={10}
          logoBackgroundColor={'transparent'}
        />
      </View>
      <Text style={styles.code}>4712</Text>
      <Text style={{color: 'white', fontSize: 16, fontFamily: 'DMSansRegular'}}>Your reservation code</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07161B',
    position: 'relative'
  },
  title: {
    fontSize: 36,
    color: '#4BB468',
    fontFamily: 'DMSansBold',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'DMSansRegular',
    color: '#FFFFFF',
    marginBottom: 6
  },
  code: {
    width: 275,
    fontSize: 42,
    fontFamily: 'PoppinsMedium',
    color: '#FFFFFF',
    backgroundColor: '#074644',
    elevation: 4,
    marginVertical: 8,
    textAlign: 'center',
    borderRadius: 16,
    letterSpacing: 24,
  },
  backButton: {
    width: '90%',
    backgroundColor: '#0BA89D',
    paddingVertical: 18,
    alignItems: 'center',
    borderRadius: 12,
    position: 'absolute',
    bottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF'
  }
})

export default SuccessQRScreen