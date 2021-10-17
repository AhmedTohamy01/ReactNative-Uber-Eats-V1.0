import * as React from 'react'
import styled from 'styled-components'
import { SafeAreaView, StatusBar } from 'react-native'
import RootNavigation from './RootNavigation'
import { MainContextProvider } from './context/MainContext'

export default function App() {
  return (
    <MainContextProvider>
      <StyledSafeAreaView>
        <RootNavigation />
      </StyledSafeAreaView>
    </MainContextProvider>
  )
}

/*---> Styles <---*/
const StyledSafeAreaView = styled(SafeAreaView)`
  margin-top: ${StatusBar.currentHeight
    ? `${StatusBar.currentHeight}px`
    : `0px`};
  flex: 1;
`
