import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components'
import Buttons from '../components/Home/Buttons'

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('delivery')

  return (
    <PageWrapper>
      <Buttons activeTab={activeTab} setActiveTab={setActiveTab} />

      <Text>Home Screen</Text>
    </PageWrapper>
  )
}

/*---> Styles <---*/
const PageWrapper = styled(View)`
  /* border: 1px solid yellow; */
  align-items: center;
  flex: 1;
  background-color: white;
`
