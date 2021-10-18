import React from 'react'
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Cocktails from '../../assets/images/bar.png'
import Pizza from '../../assets/images/pizza.png'
import Noodels from '../../assets/images/noodels.png'
import Seafood from '../../assets/images/seafood.png'
import Italian from '../../assets/images/italian.png'
import Breakfast from '../../assets/images/breakfast.png'
import Sandwiches from '../../assets/images/sandwiches.png'
import Everything from '../../assets/images/everything.png'

export default function Categories() {
  return (
    <CategoriesWrapper horizontal showsHorizontalScrollIndicator={false}>
      <StyledView>
        <StyledTouchableOpacity>
          <StyledImage source={Cocktails} />
          <StyledText>Cocktails</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity>
          <StyledImage source={Pizza} />
          <StyledText>Pizza</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity>
          <StyledImage source={Noodels} />
          <StyledText>Noodels</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity>
          <StyledImage source={Seafood} />
          <StyledText>Seafood</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity>
          <StyledImage source={Italian} />
          <StyledText>Italian</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity>
          <StyledImage source={Breakfast} />
          <StyledText>Breakfast</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity>
          <StyledImage source={Sandwiches} />
          <StyledText>Sandwiches</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledTouchableOpacity>
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
