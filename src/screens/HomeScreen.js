import { View, Text, TouchableOpacity, Image, SafeAreaView, Dimensions, FlatList, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'
import ZoneCard, { zones } from '../components/ZoneCard'

const {width, height} = Dimensions.get('screen');

const filters = ['All', 'Relevance', 'Most Booked', 'High Rating', 'Most Popular'];

const HomeScreen = ({navigation}) => {

  const {user} = useSelector(state=> state?.user)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{paddingTop: 30, backgroundColor: '#07161B', width: width, height: height, paddingHorizontal: 24}}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBtn} >
          <Image source={require('../../assets/images/user.png')} resizeMode="contain" style={styles.searchBtnImage} />
        </View>
        
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor={'#FFFFFF'} />
        </View>

        <TouchableOpacity style={[styles.searchBtn, {backgroundColor: '#074644'}]} onPress={()=> navigation.navigate('Notification')} >
          <Image source={require('../../assets/images/notification.png')} />
        </TouchableOpacity>
      </View>
      
      <Text style={{fontSize: 32, color: 'white', fontFamily: 'DMSansRegular'}}>Hello, <Text style={{color: '#0BA89D'}}>Anthony</Text></Text>
      <Text style={{color: 'white', fontSize: 14, fontFamily: 'DMSansRegular'}}>Choose your PC Club</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 36, marginVertical: 16}}>
        {
          filters.map((item, index)=> {
            return (
              <TouchableOpacity key={index} style={{display: 'flex', paddingHorizontal: 16, backgroundColor: '#074644', marginRight: 6, borderRadius: 48, justifyContent: 'center'}}>
                <Text style={{color: 'white', fontFamily: 'PoppinsLight'}}>{item}</Text>
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
        ListFooterComponent={()=> <TouchableOpacity style={{alignItems: 'center', marginBottom: 120, backgroundColor: '#074644', borderRadius: 24, marginHorizontal: 100, paddingVertical: 10}} onPress={()=> {dispatch(logout()); navigation.navigate('Signin')}}>
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>}
      />
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