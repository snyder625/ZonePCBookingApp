import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'

const HomeScreen = ({navigation}) => {

  const {user} = useSelector(state=> state?.user)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={()=> {dispatch(logout()); navigation.replace('Onboarding')}} title='Logout'></Button>
    </View>
  )
}

export default HomeScreen