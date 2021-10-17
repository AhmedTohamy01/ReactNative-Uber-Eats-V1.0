import React from 'react'
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import ShoppingBag from '../../assets/images/shopping-bag.png'
import SoftDrinks from '../../assets/images/soft-drink.png'
import FastFood from '../../assets/images/fast-food.png'
import Bread from '../../assets/images/bread.png'
import Coffee from '../../assets/images/coffee.png'
import Deals from '../../assets/images/deals.png'
import Desserts from '../../assets/images/desserts.png'

export default function Categories() {
  return (
    <CategoriesWrapper horizontal showsHorizontalScrollIndicator={false}>
      <StyledView>
        <TouchableOpacity>
          <StyledImage source={ShoppingBag} />
          <StyledText>Pick-up</StyledText>
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <TouchableOpacity>
          <StyledImage source={SoftDrinks} />
          <StyledText>Drinks</StyledText>
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <TouchableOpacity>
          <StyledImage source={FastFood} />
          <StyledText>Burger</StyledText>
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <TouchableOpacity>
          <StyledImage source={Bread} />
          <StyledText>Bread</StyledText>
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <TouchableOpacity>
          <StyledImage source={Coffee} />
          <StyledText>Coffee</StyledText>
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <TouchableOpacity>
          <StyledImage source={Deals} />
          <StyledText>Deals</StyledText>
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <TouchableOpacity>
          <StyledImage source={Desserts} />
          <StyledText>Desserts</StyledText>
        </TouchableOpacity>
      </StyledView>
    </CategoriesWrapper>
  )
}

const StyledImage = styled(Image)`
  /* border: 1px solid red; */
  width: 50px;
  height: 50px;
  margin-right: 30px;
`

const StyledText = styled(Text)`
  /* border: 1px solid red; */
`

const StyledView = styled(View)`
  /* border: 1px solid red; */
`

const CategoriesWrapper = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
  },
})``
