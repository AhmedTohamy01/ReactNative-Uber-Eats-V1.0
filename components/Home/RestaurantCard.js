import React, { useContext } from 'react'
import styled from 'styled-components'
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { MainContext } from '../../context/MainContext'

export default function RestaurantCard({
  navigation,
  image,
  name,
  price,
  reviews,
  rating,
  categories,
}) {
  const { setCartItems } = useContext(MainContext)
  return (
    <CardWrapper>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('RestaurantScreen', {
            name,
            image,
            price,
            reviews,
            rating,
            categories,
          })
        }}
      >
        <StyledImage source={{ uri: image }} />
        <StyledTouchableOpacity>
          <HeartIcon name='heart-outline' />
        </StyledTouchableOpacity>
        <Title>{name}</Title>
        <SubTitle>Price: {price}</SubTitle>
      </TouchableOpacity>
    </CardWrapper>
  )
}

const CardWrapper = styled(View)`
  border: 1px solid black;
  height: 250px;
  width: 100%;
  padding: 10px;
  width: 90%;
  margin-top: 20px;
  border-radius: 10px;
`

const StyledImage = styled(Image).attrs({ resizeMode: 'cover' })`
  /* border: 1px solid red; */
  width: 100%;
  height: 70%;
  border-radius: 10px;
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
  /* border: 1px solid red; */
  font-size: 25px;
  position: absolute;
  right: 20px;
  top: 20px;
`

const HeartIcon = styled(MaterialCommunityIcons)`
  /* border: 1px solid red; */
  font-size: 25px;
  color: white;
`

const Title = styled(Text)`
  /* border: 1px solid red; */
  font-size: 20px;
  margin-top: 10px;
`

const SubTitle = styled(Text)`
  /* border: 1px solid red; */
  font-size: 15px;
  margin-top: 5px;
  color: gray;
`
