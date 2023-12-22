import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

const FavoriteSpots = ({navigation}) => {

    const favoriteSpots = [
        {
            name: 'Twix Cyber Club'
        },
        {
            name: 'Senior Cyber Club'
        },
        {
            name: 'Hunger B Cyber Club'
        },
    ]
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
        {
            favoriteSpots.map((item, index) => (
                <View style = {styles.Card} key={index}>
                <Text style={styles.heading}>{item.name}</Text>
                <Image style={styles.heartIcon} source={require('../../assets/images/heart.png')} />
                <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Book</Text></TouchableOpacity>
                <View style={styles.horizontalLine} />
            </View>
            
            ))
        }
      
      </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    width: width,
    height: height,
    backgroundColor: '#07161B',
  },
  Card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#913e0f',
    height: '8%',
    width: '90%',
    borderRadius: 12,
    marginVertical: '3%'
  },
  heartIcon: {
    height: 15,
    width: 15,
    marginLeft: '15%',
    marginRight: '4%'
  },
  horizontalLine: {
    borderBottomColor: '#074644CC',
    borderBottomWidth: 2,
    marginVertical: 5, 
  },
  heading:{
    textAlign: "center",
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    fontFamily: 'PoppinsRegular'
  },
  btnText: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'DMSansRegular'
  },
  btn: {

    fontSize: 17,
    height: 25,
    width: 75,
    backgroundColor: '#0BA89D',
    fontFamily: 'DMSansRegular',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  CardImage:{
    height: '30%',
    width: "98%",
    resizeMode: 'cover',
    justifyContent: 'center',  
    alignItems: 'center',
    backgroundColor: '#cc5612'
    
  }
})

export default FavoriteSpots