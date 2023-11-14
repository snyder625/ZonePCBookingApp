import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('screen');

const StandardZone = ({ navigation }) => {

    const upperContainerItems = [
        {
            icon: require('../../assets/images/standard1.png'),
            text: 'RTX 3050'
        },
        {
            icon: require('../../assets/images/standard2.png'),
            text: 'I3 12100F'
        },
        {
            icon: require('../../assets/images/standard3.png'),
            text: '16 GB'
        },
        {
            icon: require('../../assets/images/standard4.png'),
            text: 'AOC 165 HZ'
        },
        {
            icon: require('../../assets/images/standard5.png'),
            text: 'HYPERX CLOUD CORE'
        },
        {
            icon: require('../../assets/images/standard6.png'),
            text: 'HYPERX ORIGINS CORE'
        },
        {
            icon: require('../../assets/images/standard7.png'),
            text: 'DXRACER PRINCE'
        },
        {
            icon: require('../../assets/images/standard8.png'),
            text: 'ZOWIE EC2-C'
        },
        
    ]

    const bottomContainerItems= [
        {
            upperText: '1 H',
            lowerText: '400',
            lower: false
        },
        {
            upperText: '3 H',
            lowerText: '1100',
            lower: false
        },
        {
            upperText: '5 H',
            lowerText: '1500',
            lower: false
        },
        {
            upperText: 'Day/Night',
            lowerText: '2400',
            lower: true
        },
    ]
    const itemsPerRow = 4;

    // Split the items into rows
    const rows = [];
    for (let i = 0; i < upperContainerItems.length; i += itemsPerRow) {
    rows.push(upperContainerItems.slice(i, i + itemsPerRow));
    }
  return (
    
    <ImageBackground source={require('../../assets/images/Background.png')} style={styles.container} resizeMode="cover">
      <View style={styles.imageView} > 
        <Image source={require("../../assets/images/standardZone.png")} style={styles.imageStyle} />
      </View>
      <Text style={styles.textStyle} >Standard Zone</Text>

        <View style={styles.upperContainer}>
            {Array.from({ length: Math.ceil(upperContainerItems.length / 4) }).map((_, rowIndex) => (
            <View style={styles.icons} >
                {upperContainerItems.slice(rowIndex * 4, rowIndex * 4 + 4).map((item, index) => (
            <View key={index} style={styles.iconWithText}>
            <Image source={item.icon} style={{width: 30, height: 30}} />
            <Text style={{fontSize: 12, color: 'white', fontWeight: '300', marginTop: 15}}>{item.text}</Text>
            </View>

        ))}
        </View>
        ))}
        </View>

        <View style={styles.bottomContainer} >
            {bottomContainerItems.map((item, index) => (
                <View key={index} style={{marginHorizontal: 12}} >
                    {item.lower === true ? (<Text style={{fontSize: 12, color: 'white', fontWeight: '300', marginVertical: 7}}>{item.upperText}</Text>) : (<Text style={{fontSize: 22, color: 'white', fontWeight: '300'}}>{item.upperText}</Text>)}
                <View style={{display: 'flex', flexDirection: 'row'}} ><Text style={{fontSize: 15, color: 'white', fontWeight: '300'}}>{item.lowerText}</Text><Image style={{marginTop: 6, marginLeft: 5}} source={require("../../assets/images/T.png")}/></View>
            </View>
            ))}
            
        </View>

        <TouchableOpacity style={styles.button} >
          <Text style={styles.butonText} onPress={()=> navigation.navigate('Map')}>Reserve Now</Text>
        </TouchableOpacity>
    </ImageBackground>

  );
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

  icon: {
    width: 50, 
    height: 50, 
    position: 'absolute',
    top: 50, 
    left: 20, 
  },

  imageView:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageStyle: {
    marginTop: 60,
    height: 200,
    borderRadius: 25,
    marginHorizontal: 8
    
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 20,
    fontFamily: 'PoppinsLight'
  },

  upperContainer: {
    marginTop: 16,
    width: width * 0.85,
    height: 200,
    backgroundColor: '#074644',
    borderRadius: 12,
    borderColor: '#0BA89D',
    borderWidth: 1
  },
  iconWithText: {
    height: 70,
    width: width * 0.2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },

  bottomContainer: {
    marginTop: 15,
    width: width * 0.85,
    height: 100,
    backgroundColor: '#074644',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#0BA89D',
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    backgroundColor: '#0BA99F',
    borderRadius: 9,
    marginTop: 25,
    height: 50,
  },
  butonText: {
    lineHeight: 21,
    fontWeight: '600',
    // letterSpacing: 0.25,
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    margin: 10,
  },
  card: {
    height: '40%',
    width: '75%',
    backgroundColor: "#085956",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    fontFamily: "PoppinsMedium",
    fontWeight: "bold"
  },
  content: {
    fontSize: 14,
    color: '#B8B8D2',
    textAlign: "center",
    marginHorizontal: 15,
    marginTop: 20,
  },
});

export default StandardZone;
