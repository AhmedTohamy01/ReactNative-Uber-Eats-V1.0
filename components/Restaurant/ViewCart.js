import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { MainContext } from '../../context/MainContext'

export default function ViewCart({}) {
  const { cartItems, setShowCartModal } = useContext(MainContext)
  const total = cartItems.reduce((acc, item) => {
    const price = Number(item.price.replace('$', ''))
    return acc + price
  }, 0)

  const totalUSD = `$${total.toFixed(2)}`
  const totalItems = cartItems.length

  return (
    <>
      {total ? (
        <StyledTouchableOpacity
          activeOpacity={0.5}
          onPress={() => setShowCartModal(true)}
        >
          <TotalItems>{totalItems}</TotalItems>
          <StyledText>View Cart</StyledText>
          <TotalText>{totalUSD}</TotalText>
        </StyledTouchableOpacity>
      ) : null}
    </>
  )
}

const StyledTouchableOpacity = styled(TouchableOpacity)`
  /* border: 1px solid red; */
  width: 300px;
  padding: 13px;
  border-radius: 30px;
  background-color: black;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  z-index: 999;
`

const StyledText = styled(Text)`
  /* border: 1px solid red; */
  color: white;
  width: 50%;
  text-align: center;
`

const TotalText = styled(Text)`
  /* border: 1px solid red; */
  color: white;
  width: 25%;
  text-align: right;
  padding-right: 10px;
`

const TotalItems = styled(Text)`
  /* border: 1px solid red; */
  color: white;
  width: 25%;
  text-align: left;
  padding-left: 10px;
`
