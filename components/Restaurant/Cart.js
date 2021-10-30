import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, Modal, View, ScrollView } from 'react-native'
import { MainContext } from '../../context/MainContext'

export default function Cart({ route, navigation }) {
  const { showCartModal, setShowCartModal, cartItems } = useContext(MainContext)

  const getSubTotal = () => {
    const subTotal = cartItems.reduce((acc, item) => {
      const price = Number(item.price.replace('$', ''))
      return acc + price
    }, 0)

    const subTotalUSD = `$${subTotal.toFixed(2)}`
    return subTotalUSD
  }

  const getTax = () => {
    const subTotal = getSubTotal()
    const subTotalNum = Number(subTotal.replace('$', ''))
    const tax = subTotalNum * 0.14
    const taxUSD = `$${tax.toFixed(2)}`
    return taxUSD
  }

  const getTotal = () => {
    const subTotal = getSubTotal()
    const subTotalNum = Number(subTotal.replace('$', ''))
    const tax = getTax()
    const taxNum = Number(tax.replace('$', ''))
    const total = subTotalNum + taxNum
    const totalUSD = `$${total.toFixed(2)}`
    return totalUSD
  }

  const handleCheckoutClick = () => {
    setShowCartModal(false)
    navigation.navigate('OrderConfirmScreen')
  }

  const handleGoBackClick = () => {
    setShowCartModal(false)
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showCartModal}
      onRequestClose={() => setShowCartModal(false)}
    >
      <ModalContentWrapper>
        <ModalContent>
          <RestName>{route.params.name}</RestName>
          <ItemsNo>
            Total Items: {cartItems.length}{' '}
            {cartItems.length > 3 ? `(Scroll to see all items)` : null}
          </ItemsNo>
          <ItemsWrapper>
            {cartItems.map((item, index) => (
              <ItemWrapper key={index}>
                <ItemName>{item.title}</ItemName>
                <ItemPrice>{item.price}</ItemPrice>
              </ItemWrapper>
            ))}
          </ItemsWrapper>
          <SubTotalWrapper>
            <SubTotal>Subtotal:</SubTotal>
            <SubTotal>{getSubTotal()}</SubTotal>
          </SubTotalWrapper>
          <TaxWrapper>
            <Tax>Tax (14%):</Tax>
            <Tax>{getTax()}</Tax>
          </TaxWrapper>
          <TotalWrapper>
            <Total>Total:</Total>
            <Total>{getTotal()}</Total>
          </TotalWrapper>
          <ButtonsWrapper>
            <TouchableOpacity onPress={handleGoBackClick}>
              <BackButton>Go Back </BackButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCheckoutClick}>
              <CheckoutButton>Checkout</CheckoutButton>
            </TouchableOpacity>
            <TouchableOpacity>
              <ClearButton>Clear Cart</ClearButton>
            </TouchableOpacity>
          </ButtonsWrapper>
        </ModalContent>
      </ModalContentWrapper>
    </Modal>
  )
}

/*---> Styles <---*/

const ModalContentWrapper = styled(View)`
  /* border: 1px solid yellow; */
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.7);
`

const ModalContent = styled(View)`
  /* border: 1px solid red; */
  background-color: white;
  height: 435px;
`

const RestName = styled(Text)`
  /* border: 1px solid green; */
  text-align: center;
  padding: 15px 15px 5px 15px;
  margin-top: 0px;
`

const ItemsNo = styled(Text)`
  /* border: 1px solid green; */
  text-align: center;
  padding: 5px 5px 10px 5px;
`

const ItemsWrapper = styled(ScrollView)`
  border: 3px solid gray;
`

const ItemWrapper = styled(View)`
  /* border: 1px solid green; */
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`

const ItemName = styled(Text)`
  /* border: 1px solid green; */
`

const ItemPrice = styled(Text)`
  /* border: 1px solid green; */
`

const SubTotalWrapper = styled(View)`
  /* border: 1px solid green; */
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 18px;
`

const SubTotal = styled(Text)`
  /* border: 1px solid green; */
`

const TaxWrapper = styled(View)`
  /* border: 1px solid green; */
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 18px;
`

const Tax = styled(Text)`
  /* border: 1px solid green; */
`

const TotalWrapper = styled(View)`
  /* border: 1px solid green; */
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 18px;
`

const Total = styled(Text)`
  /* border: 1px solid green; */
  font-weight: bold;
`

const ButtonsWrapper = styled(View)`
  /* border: 1px solid red; */
  flex-direction: row;
  justify-content: space-around;
`

const CheckoutButton = styled(Text)`
  /* border: 1px solid red; */
  background-color: black;
  color: white;
  padding: 15px;
  width: 150px;
  border-radius: 30px;
  text-align: center;
  margin: 20px auto;
`

const ClearButton = styled(Text)`
  /* border: 1px solid red; */
  background-color: black;
  color: white;
  padding: 15px;
  width: 100px;
  border-radius: 30px;
  text-align: center;
  margin: auto;
`

const BackButton = styled(Text)`
  /* border: 1px solid red; */
  background-color: black;
  color: white;
  padding: 15px;
  width: 100px;
  border-radius: 30px;
  text-align: center;
  margin: auto;
`
