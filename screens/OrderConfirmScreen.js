import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, BackHandler } from 'react-native'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'
import { MainContext } from '../context/MainContext'

export default function OrderConfirmScreen({ route, navigation }) {
  const { setCartItems } = useContext(MainContext)

  const hanldeBackToHome = () => {
    navigation.navigate('HomeScreen')
  }

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('HomeScreen')
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  useEffect(() => {
    setCartItems([])
  }, [])

  return (
    <PageWrapper>
      <ImageWrapper>
        <StyledLottieView
          source={require('../assets/images/check.json')}
          autoPlay
          speed={1}
        />
      </ImageWrapper>
      <StyledText>Order confirmed, Thank you!</StyledText>
      <ButtonWrapper>
        <TouchableOpacity onPress={hanldeBackToHome}>
          <GoToHomeButton>
            <ButtonText>Back to Home</ButtonText>
          </GoToHomeButton>
        </TouchableOpacity>
      </ButtonWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled(View)`
  /* border: 1px solid red; */
  background-color: white;
  flex: 1;
`

const ImageWrapper = styled(View)`
  /* border: 1px solid red; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70%;
`

const StyledLottieView = styled(LottieView)`
  /* border: 1px solid green; */
  height: 600px;
`

const StyledText = styled(Text)`
  /* border: 1px solid yellow; */
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`

const ButtonWrapper = styled(View)`
  /* border: 1px solid red; */
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`

const GoToHomeButton = styled(View)`
  /* border: 1px solid red; */
  padding: 30px;
  border-radius: 20px;
  background-color: black;
`
const ButtonText = styled(Text)`
  /* border: 1px solid red; */
  color: white;
  font-size: 16px;
`
