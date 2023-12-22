import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HistoryItem = ({item}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 12}}>
        <Image source={item.imageUrl} />
        <View>
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'DMSansMedium'}}>{item.clubName}</Text>
          <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 14, fontFamily: 'DMSansRegular'}}>{item.date} / Seat - {item.seatNo} / {item.duration}H </Text>
          <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 14, fontFamily: 'DMSansRegular'}}>{item.price}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: '#0BA89D', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 16}}>
          <Text style={{fontFamily: 'DMSansRegular', fontSize: 14, color: 'white'}}>Rebook</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HistoryItem