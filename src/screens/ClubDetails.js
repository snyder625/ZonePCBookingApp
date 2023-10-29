import { View, Text, Pressable, ImageBackground, Image, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Svg, Path, } from 'react-native-svg';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const {width} = Dimensions.get('screen')

function ClubDetails({navigation}) {

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../../assets/images/twix-cyber.png')} 
        style={styles.coverImage}
      >
        <Text style={styles.coverText}>Twix Cyber Club</Text>
      </ImageBackground>

      <View style={styles.secondaryContainer}>
        <View style={styles.photoVideoContainer}>
            <Image style={{borderRadius: 6, position: 'relative', height: 180}} source={require('../../assets/images/image166.png')} />
            <Text style={{position: 'absolute', color: 'white', fontSize: 24, top: 70, left: width / 4, fontFamily: 'PoppinsRegular'}}>Photos/Videos</Text>
            
            <View style={styles.availabilityBox}>
                <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                    <Text style={{color: '#34A853'}}>15</Text>
                    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <Path
                        d="M6 7.66667V9.33333M2.11111 7.66667H9.88889C10.5025 7.66667 11 7.16921 11 6.55556V2.11111C11 1.49746 10.5025 1 9.88889 1H2.11111C1.49746 1 1 1.49746 1 2.11111V6.55556C1 7.16921 1.49746 7.66667 2.11111 7.66667ZM2.66667 11H9.33333V10.4444C9.33333 9.83079 8.83587 9.33333 8.22222 9.33333H3.77778C3.16413 9.33333 2.66667 9.83079 2.66667 10.4444V11Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </Svg>
                </View>
                <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                    <Text style={{color: '#C43D28'}}>7</Text>
                    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <Path
                        d="M6 7.66667V9.33333M2.11111 7.66667H9.88889C10.5025 7.66667 11 7.16921 11 6.55556V2.11111C11 1.49746 10.5025 1 9.88889 1H2.11111C1.49746 1 1 1.49746 1 2.11111V6.55556C1 7.16921 1.49746 7.66667 2.11111 7.66667ZM2.66667 11H9.33333V10.4444C9.33333 9.83079 8.83587 9.33333 8.22222 9.33333H3.77778C3.16413 9.33333 2.66667 9.83079 2.66667 10.4444V11Z"
                        stroke="white"
                        strokeOpacity={0.3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </Svg>
                </View>
                <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                    <Text style={{color: '#C47C28'}}>5</Text>
                    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <Path
                        d="M6 7.66667V9.33333M2.11111 7.66667H9.88889C10.5025 7.66667 11 7.16921 11 6.55556V2.11111C11 1.49746 10.5025 1 9.88889 1H2.11111C1.49746 1 1 1.49746 1 2.11111V6.55556C1 7.16921 1.49746 7.66667 2.11111 7.66667ZM2.66667 11H9.33333V10.4444C9.33333 9.83079 8.83587 9.33333 8.22222 9.33333H3.77778C3.16413 9.33333 2.66667 9.83079 2.66667 10.4444V11Z"
                        stroke="white"
                        strokeOpacity={0.3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </Svg>
                </View>
            </View>
        </View>

        {/* Review Button */}
        <Pressable style={styles.reviewsButton}>
            <Text style={{color: 'white', fontFamily: 'DMSansRegular'}}>{`Read Reviews >`}</Text>
        </Pressable>
        <Text style={styles.clubDescription}>Twix Cyber Club - is a very modernly designed PC Gaming Club with lots of seats and games</Text>
        <Image source={require('../../assets/images/image164.png')} />
        <Text style={styles.addressText}>Street Leo, 4th avenue 148</Text>

        {/* Owner Details Container */}
        <View style={styles.ownerDetails}>
          <View style={styles.socialMediaColumn}>
            <Ionicons name="logo-whatsapp" size={36} color="#075E54" style={{backgroundColor: 'white'}} />
            <Ionicons name="logo-instagram" size={36} color="#833AB4" style={{backgroundColor: 'white'}} />
            <Ionicons name="logo-facebook" size={36} color="#4267B2" style={{backgroundColor: 'white'}} />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.ownerBio}>
              <Image source={require('../../assets/images/owner.png')} />
              <View style={{marginLeft: 12, gap: 6}}>
                <Text style={styles.ownerName}>Polka Vastanovski</Text>
                <Text style={styles.designation}>Manager of Twix Cyber Club</Text>
                <Text style={styles.phoneNo}>+7707-143-44-99</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={{color: '#FFFFFF'}}>Message <AntDesign name="message1" size={20} /></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Zones List */}
        <View style={{width: '90%', marginVertical: 20}}>
          <View style={styles.zonesList}>
            <Text style={{color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSansRegular', fontWeight: 'bold'}}>List Of Zones</Text>
            <AntDesign name="down" size={20} color="#FFFFFF" />
          </View>
          <View style={{backgroundColor: '#074644', padding: 20, gap: 12, marginTop: 12, borderRadius: 12}}>
            <TouchableOpacity style={styles.zoneVariantButton} onPress={()=> navigation.navigate('StandardZone')}>
              <Text style={styles.zoneListText}>Standard Zone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.zoneVariantButton}>
              <Text style={styles.zoneListText}>VIP Zone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.zoneVariantButton}>
              <Text style={styles.zoneListText}>Premium Zone</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Reserve Button */}
        <TouchableOpacity style={styles.reserveNowButton}>
          <Text style={{color: '#FFFFFF', fontSize: 20, fontFamily: 'PoppinsRegular'}}>Reserve Now</Text>
          <AntDesign name="arrowright" size={26} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#07161B'
  },
  coverImage: {
    width: '100%',
    height: 200, 
    borderRadius: 6, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  coverText: {
    color: 'white', 
    fontSize: 32,
    fontFamily: 'DMSansRegular'
  },
  secondaryContainer: {
    padding: 24,
    alignItems: 'center',
  },
  photoVideoContainer: {
    overflow: 'hidden', 
    borderRadius: 6
  },
  availabilityBox: {
    backgroundColor: '#074644', 
    display: 'flex', 
    gap: 10, 
    flexDirection: 'row', 
    position: 'absolute', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 6, 
    top: 150, 
    right: 0
  },
  reviewsButton: {
    backgroundColor: '#074644', 
    width: 160, 
    padding: 8, 
    borderRadius: 18, 
    alignItems: 'center',
  },
  clubDescription: {
    color: 'white', 
    paddingVertical: 12, 
    textAlign: 'center', 
    fontSize: 14,
    fontFamily: 'DMSansRegular'
  },
  addressText: {
    color: 'white', 
    paddingVertical: 12, 
    textAlign: 'center', 
    fontSize: 14,
    fontFamily: 'DMSansRegular'
  },
  ownerDetails: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  socialMediaColumn: {
    flexDirection: 'column',
    maxWidth: '20%',
    gap: 6
  },
  ownerBio: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 24
  },
  ownerName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'DMSansRegular'
  },
  designation: {
    color: '#FFFFFF',
    opacity: 0.7,
    fontFamily: 'DMSansRegular'
  },
  phoneNo: {
    color: '#FFFFFF',
    opacity: 0.5,
    fontFamily: 'DMSansRegular'
  },
  messageButton: {
    backgroundColor: '#074644',
    marginTop: 16,
    padding: 10,
    borderRadius: 12,
  },
  zonesList: {
    backgroundColor: '#074644',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12
  },
  reserveNowButton: {
    backgroundColor: '#0BA89D',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  zoneListText: {
    color: '#FFFFFF', 
    fontFamily: 'DMSansRegular', 
    fontSize: 16,
    textAlign: 'center'
  },
  zoneVariantButton: {
    backgroundColor: '#0BA89D',
    padding: 12,
    borderRadius: 12
  }
})

export default ClubDetails