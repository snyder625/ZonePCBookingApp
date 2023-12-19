import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');
const ProfileScreen = () => {
  return (
    <View
  
  style={styles.container}
  resizeMode="cover"
>

    <Image source={require("../assets/images/userEdit.png")} />
    
    <View style={{backgroundColor: '#0E252C8C', borderRadius: 12, width: '90%', padding: '2%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
    {/* Username */}
    <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="white" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="User" 
          placeholderTextColor="#EAEAEACC" 
          defaultValue="User"
        />
      </View>

      {/* Phone */}
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={24} color="white" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="322434" 
          placeholderTextColor="#EAEAEACC" 
          defaultValue="322434"
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="white" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="xyz@gmail.com" 
          placeholderTextColor="#EAEAEACC" 
          defaultValue="xyz@gmail.com"
        />
      </View>

      <TouchableOpacity style={{backgroundColor: '#3D737F8C', borderRadius: 24, padding: '3%', marginTop: '4%', width: 115, display:'flex', justifyContent: 'center'}}>
        <Text style={styles.resetTxt}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#0BA89D', borderRadius: 24, padding: '3%', marginTop: '10%', width: '100%'}}>
        <Text style={styles.updateTxt}>UPDATE</Text>
      </TouchableOpacity>


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

      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingBottom: 5,
        marginVertical: 10,
        width: width * 0.8, // Adjust width as needed
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: 40,
        color: 'white',
        fontFamily: 'DMSansRegular',
      },
      upperText: {
        color: "#EAEAEACC",
        fontSize: 13,
        fontFamily: 'DMSansRegular',
        textAlign: 'left',
        left: 5,
        marginVertical: '0.5%',
      },
      resetTxt: {
        fontSize: 13,
        color: 'white',
        fontFamily: 'DMSansRegular'
      },
      updateTxt: {
        fontSize: 19,
        fontFamily: 'DMSansMedium',
        color: 'white',
        textAlign: 'center'
      }
})
export default ProfileScreen