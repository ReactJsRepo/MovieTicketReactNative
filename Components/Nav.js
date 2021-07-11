import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MovieList from './MovieList'
import Details from './Details'
import BookingDetails from './BookingDetails'
import Confirmation from './Confirmation'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MovieList'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='MovieList'
          component={MovieList}
          options={{ title: 'Movie Ticket Booking' }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
        />
        <Stack.Screen
          name='BookingDetails'
          component={BookingDetails}
        />
        <Stack.Screen
          name='Confirmation'
          component={Confirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator