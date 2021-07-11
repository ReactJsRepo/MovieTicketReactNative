import React,{ useState } from 'react'
import {  View, Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg'


/*****  Confirmation Page *****/

function Confirmation({route, navigation}) {

  const ticketData = route.params.ticketDataString
  const movieName = route.params.name
  console.log(ticketData)
  console.log(typeof(ticketData))

  return (
    <View>
      <Text>{"\n"}</Text>
      <Text style={{fontWeight: 'bold',fontSize:20,textAlign:'center'}}>
        Your booking is confimed for movie '{movieName}' </Text>
      <Text>{"\n"}</Text>
      <View  style={{borderRadius: 10, borderWidth: 1, borderColor: 'black', 
                overflow: 'hidden', padding: 20}}>
          <Text style={{fontSize:15}}>Scan QR Code at the entrance! </Text>
          <Text>{"\n"}</Text>
          <QRCode value = {ticketData} ></QRCode> 
      </View>
    </View>


  )
}

export default Confirmation
