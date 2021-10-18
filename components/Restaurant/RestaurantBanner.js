import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'

export default function RestaurantBanner({ route }) {
  return (
    <BannerWrapper>
      <BannerImage
        source={{
          uri: route.params.image,
        }}
      />
      <InfoWrapper>
        <Title>{route.params.name}</Title>
        <SubTitle>
          {route.params.categories.map((item) => item.title).join(', ')} •{' '}
          {route.params.price} • {route.params.rating} ⭐ (
          {route.params.reviews}+)
        </SubTitle>
      </InfoWrapper>
    </BannerWrapper>
  )
}

/*---> Styles <---*/

const BannerWrapper = styled(View)`
  /* border: 1px solid red; */
  /* align-items: center; */
  width: 100%;
  /* height: 250px; */
  padding-bottom: 10px;
`

const BannerImage = styled(Image)`
  /* border: 1px solid red; */
  width: 100%;
  height: 180px;
`

const InfoWrapper = styled(View)`
  /* border: 1px solid red; */
  padding: 0px 10px;
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
