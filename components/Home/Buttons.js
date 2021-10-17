import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export default function Buttons({ activeTab, setActiveTab }) {
  return (
    <ButtonsWrapper>
      <StyledButton
        onPress={() => setActiveTab('delivery')}
        activeTab={activeTab === 'delivery'}
      >
        <StyledText activeTab={activeTab === 'delivery'}>Devliery</StyledText>
      </StyledButton>
      <StyledButton
        onPress={() => setActiveTab('pickup')}
        activeTab={activeTab === 'pickup'}
      >
        <StyledText activeTab={activeTab === 'pickup'}>Pickup</StyledText>
      </StyledButton>
    </ButtonsWrapper>
  )
}

const ButtonsWrapper = styled(View)`
  /* border: 1px solid red; */
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  border-radius: 10px;
  width: 60%;
  margin-top: 20px;
  background-color: white;
`

const StyledButton = styled(TouchableOpacity)`
  /* border: 1px solid red; */
  border-radius: 30px;
  width: 100px;
  background: ${(props) => (props.activeTab ? 'black' : 'white')};
  justify-content: center;
  align-items: center;
`

const StyledText = styled(Text)`
  /* border: 1px solid green; */
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.activeTab ? 'white' : 'black')};
`
