import React from 'react'
import HomeScreen from './screens/HomeScreen'
// import RestScreen from './screens/RestScreen'
// import OrderConfirm from './screens/OrderConfirm'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function RootNavigation() {
  const Stack = createStackNavigator()

  const screenOptions = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        {/* <Stack.Screen name='Restaurant' component={RestScreen} />
        <Stack.Screen name='OrderConfirm' component={OrderConfirm} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
