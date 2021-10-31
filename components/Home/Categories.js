import React from 'react'
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Cocktails from '../../assets/images/bar.png'
import Pizza from '../../assets/images/pizza.png'
import Noodles from '../../assets/images/noodles.png'
import Seafood from '../../assets/images/seafood.png'
import Italian from '../../assets/images/italian.png'
import Breakfast from '../../assets/images/breakfast.png'
import Sandwiches from '../../assets/images/sandwiches.png'
import Everything from '../../assets/images/everything.png'

export default function Categories({ setActiveCategory }) {
  return (
    <CategoriesWrapper horizontal showsHorizontalScrollIndicator={false}>
      <StyledView>
        <StyledTouchableOpacity
          onPress={() => setActiveCategory('cocktailbars')}
        >
          <StyledImage source={Cocktails} />
          <StyledText>Cocktails</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity onPress={() => setActiveCategory('pizza')}>
          <StyledImage source={Pizza} />
          <StyledText>Pizza</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity onPress={() => setActiveCategory('noodles')}>
          <StyledImage source={Noodles} />
          <StyledText>Noodles</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity onPress={() => setActiveCategory('seafood')}>
          <StyledImage source={Seafood} />
          <StyledText>Seafood</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity onPress={() => setActiveCategory('italian')}>
          <StyledImage source={Italian} />
          <StyledText>Italian</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity
          onPress={() => setActiveCategory('breakfast_brunch')}
        >
          <StyledImage source={Breakfast} />
          <StyledText>Breakfast</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity onPress={() => setActiveCategory('sandwiches')}>
          <StyledImage source={Sandwiches} />
          <StyledText>Sandwiches</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity onPress={() => setActiveCategory('all')}>
          <StyledImage source={Everything} />
          <StyledText>All Categories</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </CategoriesWrapper>
  )
}

/*---> Styles <---*/

const StyledImage = styled(Image)`
  /* border: 1px solid red; */
  width: 60px;
  height: 60px;
  /* margin-right: 30px; */
`

const StyledText = styled(Text)`
  /* border: 1px solid red; */
`

const StyledView = styled(View)`
  /* border: 1px solid red; */
  margin-right: 30px;
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

const StyledTouchableOpacity = styled(TouchableOpacity)`
  /* border: 1px solid green; */
  align-items: center;
`
