import React, { useContext } from 'react'
import styled from 'styled-components'
import { View, Text, Image, ScrollView } from 'react-native'
import { foods } from '../../data/MenuData'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { MainContext } from '../../context/MainContext'

export default function Menu() {
  const { cartItems, setCartItems, refreshCheckboxes } = useContext(MainContext)

  return (
    <MenuWrapper>
      <StyledScrollView showsVerticalScrollIndicator={false}>
        {foods.map((item, index) => (
          <ItemWrapper key={index}>
            <BouncyCheckbox
              key={refreshCheckboxes}
              onPress={(isChecked) =>
                isChecked
                  ? setCartItems([...cartItems, item])
                  : setCartItems(cartItems.filter((entry) => entry !== item))
              }
              size={35}
            />
            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubTitle>{item.description}</ItemSubTitle>
              <ItemPrice>Price: {item.price}</ItemPrice>
            </ItemInfo>
            <ImageWrapper>
              <ItemImage source={{ uri: item.image }} />
            </ImageWrapper>
          </ItemWrapper>
        ))}
      </StyledScrollView>
    </MenuWrapper>
  )
}

/*---> Styles <---*/

const MenuWrapper = styled(View)`
  /* border: 1px solid red; */
  align-items: flex-start;
  width: 100%;
  flex: 1;
`

const ItemWrapper = styled(View)`
  /* border: 1px solid gray; */
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
  flex: 1;
`
const ImageWrapper = styled(View)`
  /* border: 1px solid red; */
  width: 30%;
  align-items: flex-end;
`

const ItemImage = styled(Image).attrs({ resizeMode: 'cover' })`
  /* border: 1px solid green; */
  /* width: 40%; */
  width: 100%;
  height: 70px;
  border-radius: 10px;
`

const ItemInfo = styled(View)`
  /* border: 1px solid red; */
  width: 60%;
  padding: 5px 0px;
  padding-right: 10px;
`

const ItemTitle = styled(Text)`
  /* border: 1px solid green; */
  width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
`

const ItemSubTitle = styled(Text)`
  /* border: 1px solid green; */
  width: 100%;
  margin-bottom: 5px;
`

const ItemPrice = styled(Text)`
  /* border: 1px solid green; */
  width: 100%;
  margin-bottom: 5px;
`

const StyledScrollView = styled(ScrollView).attrs({
  contentContainerStyle: {
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
    paddingBottom: 70,
    width: '95%',
  },
})``
