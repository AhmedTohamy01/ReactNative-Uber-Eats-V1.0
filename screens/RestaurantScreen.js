import React, { useEffect, useContext, useState } from 'react'
import { View, BackHandler, Alert } from 'react-native'
import styled from 'styled-components'
import RestaurantBanner from '../components/Restaurant/RestaurantBanner'
import Menu from '../components/Restaurant/Menu'
import ViewCart from '../components/Restaurant/ViewCart'
import Cart from '../components/Restaurant/Cart'
import { MainContext } from '../context/MainContext'
// import { useNavigation } from '@react-navigation/native';

export default function RestaurantScreen({ route, navigation }) {
  const { cartItems, setCartItems } = useContext(MainContext)
  // const navigation = useNavigation();

  const handleBackIconIOS = () => {
    if (cartItems.length > 0) {
      Alert.alert('Hold on!', 'This will empty the cart, are you sure ?', [
        {
          text: 'Cancel',
          onPress: () => null,
        },
        {
          text: 'YES',
          onPress: () => {
            navigation.navigate('HomeScreen')
            setCartItems([])
          },
        },
      ])
    } else {
      navigation.navigate('HomeScreen')
    }
  }

  useEffect(() => {
    const backAction = () => {
      if (cartItems.length > 0) {
        Alert.alert('Hold on!', 'This will empty the cart, are you sure ?', [
          {
            text: 'Cancel',
            onPress: () => null,
          },
          {
            text: 'YES',
            onPress: () => {
              navigation.navigate('HomeScreen')
              setCartItems([])
            },
          },
        ])
        return true
      }
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [cartItems])

  useEffect(() => (
    navigation.addListener('beforeRemove', (e) => {
      // e.preventDefault()
      setCartItems([])
    })
  ), [navigation])

  return (
    <PageWrapper>
      <RestaurantBanner route={route} handleBackIconIOS={handleBackIconIOS} />
      <StyledDivider />
      <Menu />
      <ViewCart navigation={navigation} />
      <Cart route={route} navigation={navigation} />
    </PageWrapper>
  )
}

/*---> Styles <---*/

const PageWrapper = styled(View)`
  /* border: 1px solid green; */
  align-items: center;
  flex: 1;
`

const StyledDivider = styled(View)`
  border: 1px solid lightgray;
  width: 100%;
  /* height: 10px; */
`
