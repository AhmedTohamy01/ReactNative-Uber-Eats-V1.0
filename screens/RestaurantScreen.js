import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import RestaurantBanner from '../components/Restaurant/RestaurantBanner'
import Menu from '../components/Restaurant/Menu'
import ViewCart from '../components/Restaurant/ViewCart'
import Cart from '../components/Restaurant/Cart'

export default function RestaurantScreen({ route, navigation }) {
  return (
    <PageWrapper>
      <RestaurantBanner route={route} />
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
