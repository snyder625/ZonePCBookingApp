import { View, Text, TouchableOpacity, Image, SafeAreaView, Dimensions, FlatList, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'
import { StatusBar } from 'expo-status-bar'
import Svg, { Path } from 'react-native-svg';
import ZoneCard, { zones } from '../components/ZoneCard'

const {width, height} = Dimensions.get('screen');

const filters = ['All', 'Relevance', 'Most Booked', 'High Rating', 'Most Popular'];

const HomeScreen = ({navigation}) => {

  const {user} = useSelector(state=> state?.user)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{paddingTop: 30, backgroundColor: '#07161B', width: width, height: height, paddingHorizontal: 24}}>
    <StatusBar style='light' />
      <View style={styles.searchContainer}>
        <View style={styles.searchBtn} >
          <Image source={require('../../assets/images/user.png')} resizeMode="contain" style={styles.searchBtnImage} />
        </View>
        
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor={'#FFFFFF'} />
        </View>

        <TouchableOpacity style={[styles.searchBtn, {backgroundColor: '#074644'}]} >
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M13.3333 13.3334C13.3333 12.4125 10.7216 11.6667 7.49998 11.6667M13.3333 13.3334C13.3333 14.2542 10.7216 15 7.49998 15C4.27831 15 1.66665 14.2542 1.66665 13.3334M13.3333 13.3334V17.4475C13.3333 18.3967 10.7216 19.1667 7.49998 19.1667C4.27831 19.1667 1.66665 18.3975 1.66665 17.4475V13.3334M13.3333 13.3334C16.52 13.3334 19.1666 12.5109 19.1666 11.6667V3.33335M7.49998 11.6667C4.27831 11.6667 1.66665 12.4125 1.66665 13.3334M7.49998 11.6667C3.81831 11.6667 0.833313 10.8442 0.833313 10V5.83335M7.49998 4.16669C3.81831 4.16669 0.833313 4.91252 0.833313 5.83335M0.833313 5.83335C0.833313 6.75419 3.81831 7.50002 7.49998 7.50002C7.49998 8.34419 10.2108 9.16669 13.3975 9.16669C16.5833 9.16669 19.1666 8.34419 19.1666 7.50002M19.1666 3.33335C19.1666 2.41252 16.5833 1.66669 13.3975 1.66669C10.2108 1.66669 7.62831 2.41252 7.62831 3.33335M19.1666 3.33335C19.1666 4.25419 16.5833 5.00002 13.3975 5.00002C10.2116 5.00002 7.62831 4.25419 7.62831 3.33335M7.62831 3.33335V11.805"
            stroke="white"
          />
        </Svg>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 32, color: 'white'}}>Hello, <Text style={{color: '#0BA89D'}}>Anthony</Text></Text>
      <Text style={{color: 'white', fontSize: 14}}>Choose your PC Club</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 36, marginVertical: 16}}>
        {
          filters.map((item, index)=> {
            return (
              <TouchableOpacity key={index} style={{display: 'flex', paddingHorizontal: 16, backgroundColor: '#074644', marginRight: 6, borderRadius: 48, justifyContent: 'center'}}>
                <Text style={{color: 'white'}}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

      <FlatList 
        data={zones}
        keyExtractor={(_, i)=> i.toString()}
        renderItem={({item})=> <ZoneCard item={item} onPress={()=> navigation.navigate('ClubDetails')} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={()=> <View style={{height: 50}}></View>}
      />
      {/* <Button onPress={()=> {dispatch(logout()); navigation.replace('Onboarding')}} title='Logout'></Button> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    height: 40,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#3D737F",
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  searchBtn: {
    width: 40,
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default HomeScreen