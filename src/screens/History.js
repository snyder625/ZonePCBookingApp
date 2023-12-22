import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import HistoryItem from '../components/HistoryItem'

const history = [
  {
    imageUrl: require('../../assets/images/history/history1.png'),
    clubName: 'Twix Cyber Club',
    date: 'November 16',
    seatNo: 14,
    duration: 5,
    price: 2500
  },
  {
    imageUrl: require('../../assets/images/history/history2.png'),
    clubName: 'Renegades Club',
    date: 'November 16',
    seatNo: 14,
    duration: 5,
    price: 2500
  },
  {
    imageUrl: require('../../assets/images/history/history3.png'),
    clubName: 'Senior Cyber Club',
    date: 'November 16',
    seatNo: 14,
    duration: 5,
    price: 2500
  },
  {
    imageUrl: require('../../assets/images/history/history4.png'),
    clubName: 'Hunger B Cyber Club',
    date: 'November 16',
    seatNo: 14,
    duration: 5,
    price: 2500
  },
  {
    imageUrl: require('../../assets/images/history/history5.png'),
    clubName: 'Twix Cyber Club',
    date: 'October 26',
    seatNo: 14,
    duration: 5,
    price: 2500
  }
];

const History = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#07161B', paddingTop: 85, alignItems: 'center', width: '100%'}}>
      <View style={{backgroundColor: '#0E252C', borderRadius: 24, width: '94%', overflow: 'hidden', padding: 10}}>
        <FlatList 
          data={history}
          keyExtractor={(_, i)=> i.toString()}
          renderItem={({item})=> <HistoryItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default History