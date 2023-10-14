import { View, Text, FlatList, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti'
import { useSelector } from 'react-redux';

const {width} = Dimensions.get('window')
const dialpad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
const dialpadSize = width * 0.2;
const dialpadTextSize = dialpadSize * 0.4;
const _spacing = 20;
const pinContainerSize = width / 2;
const pinLength = 4
const pinMaxSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinMaxSize - pinSpacing * 2;

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
                        underlayColor="red"
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

const LoginAuthentication = ({navigation}) => {
    const [code, setCode] = useState([]);
  return (
    <ImageBackground source={require('../../assets/images/Background.png')} resizeMode="cover" style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'}}>
        <StatusBar style='light' />
        <Image source={require('../../assets/images/logo.png')} style={{width: 70, height: 85}} />
        <Text style={{fontSize: 24, color: '#fff', marginBottom: _spacing * 0.5}}>Verification Code</Text>
        <View style={{flexDirection: 'row', gap: pinSpacing * 2, marginBottom: _spacing, height: pinSize * 2, alignItems: 'flex-end'}}>
            {[...Array(pinLength).keys()].map(i => {
                return <MotiView key={i} style={{width: 50, height: 50, backgroundColor: '#3D737F', borderRadius: pinSize, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 24}}>{code[i]}</Text>
                </MotiView>
            })}
        </View>
        <TouchableOpacity>
            <Text style={{fontSize: 16, color: '#074644', marginBottom: _spacing}}>Resend the code</Text>
        </TouchableOpacity>
        <Dialpad onPress={(item)=> {
            if (item === 'del') {
                setCode(prevCode => prevCode.slice(0, prevCode.length - 1))
            } else if (typeof item === 'number') {
                if(code.length < 4) {
                    setCode(prevCode => [...prevCode, item])
                } else {
                    navigation.navigate('Signin');
                }
            }
            console.log(code)
        }} />
    </ImageBackground>
  )
}

export default LoginAuthentication