import React from 'react'
import { Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import styled from 'styled-components'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function RestaurantBanner({ route, handleBackIconIOS }) {
  return (
    <BannerWrapper>
      <BannerImage
        source={{
          uri: route.params.image,
        }}
      />
      <StyledTouchableOpacity onPress={handleBackIconIOS}>
        <BackIcon name='chevron-left' Platform={Platform} />
      </StyledTouchableOpacity>
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
  width: 100%;
  padding-bottom: 10px;
`

const BannerImage = styled(Image)`
  /* border: 1px solid red; */
  width: 100%;
  height: 180px;
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
  /* border: 1px solid red; */
  position: absolute;
  left: 20px;
  top: 20px;
`

const BackIcon = styled(FontAwesome)`
  /* border: 1px solid red; */
  font-size: 45px;
  color: white;
  display: ${(props) => (props.Platform.OS === 'ios' ? 'flex' : 'none')};
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
