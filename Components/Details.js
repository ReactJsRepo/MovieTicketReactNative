import React,{useEffect, useState} from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Card , Button} from 'react-native-elements'
import { connect } from 'react-redux';
import {fetchMovies} from '../Actions/MovieActions';
import Icon from 'react-native-vector-icons/Ionicons';

/*****  Movie Details Page *****/

function Details({moviesData,fetchMovies,route, navigation}) {

  const id = route.params.id
  console.log('in detail',id)


    useEffect(() => {
      fetchMovies();         
      }, []);

   return moviesData.loading ?(
    <Text>Loading...</Text>
    ): moviesData.error ? (
        <Text>Error...</Text>
    ): ( 
    moviesData && moviesData.preducer && moviesData.preducer.movies &&  
    moviesData.preducer.movies.map((u,i)=>{
      if(u.id == id)
      return (
        <View style={styles.container} key={i}>
        <Card>
        <Card.Image  style={styles.imageContainer} source={{uri:u.imageUrl}}></Card.Image>
        <Card.Title style={styles.title}>{u.name}</Card.Title>
        <Text  style={styles.textval}>
          <Icon name="play"/>{u.type}
          {"\n"}
          <Icon name="star"/>{u.rate}
          {"\n"}
          <Icon name="time"/>{u.time}
          {"\n"}
          </Text>
   
          <Button
              onPress={() => navigation.navigate('BookingDetails',{movie:u.name})}
              title='Book Now' />
        </Card>
        </View>     
      )
    })

   )
}


const mapStateToProps = (state) =>
  ({
    moviesData:state
    
})


const mapDispatchToProps = disptach=> {
  return {
      fetchMovies:()=>disptach(fetchMovies())
  }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  placeImage:{
      marginRight:20,
      height:100,
      width:100,
      marginTop: 20,
      alignItems: 'center',
  },
  textval:{
      textAlign:'center',
      fontSize:15,
      marginTop: 10  
  },
  title:{
      fontSize : 20,
      color:"black",
      textAlign:'center',
      padding:15
  },
imageContainer:{
    height:200,
    width: 150,
    alignSelf: "center"
},
dataTitle:{ 
    paddingHorizontal: 10,
    fontSize:15,
    marginBottom:30,
    alignSelf: "center",
    textAlign:"center",
    color:"#05386b",
    // color:"#edf5e1",
}, 
dataContainer:{
  backgroundColor: "#edf5e1",
  paddingVertical:30,
  borderRadius: 30,
  display:"flex",
  flexDirection: "row",
  flexWrap: "wrap"
}
})