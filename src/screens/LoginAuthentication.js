import { View, Text, FlatList, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const {width} = Dimensions.get('window')
const dialpad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
const dialpadSize = width * 0.2;
const dialpadTextSize = dialpadSize * 0.4;
const _spacing = 20;
const pinsize = 4;

const Dialpad = ({onPress}) => {
    return (
        <FlatList 
            numColumns={3}
            data={dialpad}
            style={{flexGrow: 0}}
            scrollEnabled={false}
            columnWrapperStyle={{gap: _spacing}}
            contentContainerStyle={{gap: _spacing}}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item})=> {
                return (
                    <TouchableOpacity
                        disabled={item === ''}
                        onPress={() => onPress(item)}
                    >
                        <View style={{
                            width: dialpadSize,
                            height: dialpadSize,
                            borderRadius: dialpadSize,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        {
                            item === 'del' ? 
                            <Ionicons name='backspace-outline' color='white' size={dialpadTextSize} />
                            :
                            <Text style={{
                                fontSize: dialpadTextSize,
                                color: '#fff'
                            }}>{item}</Text>
                        }
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const LoginAuthentication = () => {
    const [code, setCode] = useState([])
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} resizeMode="cover" style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'}}>
        <StatusBar style='light' />
        <Dialpad onPress={(item)=> {
            if (item === 'del') {
                setCode(prevCode => prevCode.slice(0, prevCode.length - 1))
            } else if (typeof item === 'number') {
                setCode(prevCode => [...prevCode, item])
            }
            console.log(code)
        }} />
        <Text style={{color: 'white', fontFamily: 'PoppinsBlack'}}>Hi</Text>
    </ImageBackground>
  )
}

export default LoginAuthentication