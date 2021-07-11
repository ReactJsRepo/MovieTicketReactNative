import React,{useEffect} from 'react'
import { View,Text,StyleSheet,SafeAreaView ,ScrollView} from 'react-native'
import { Card , Button} from 'react-native-elements'
import { connect } from 'react-redux';
import {fetchMovies} from '../Actions/MovieActions';

/**** Movie List Page*****/


function MovieList({moviesData,fetchMovies,route, navigation}) {
    useEffect(() => {
      fetchMovies();         
      }, []);


   return moviesData.loading ?(
    <Text>Loading...</Text>
    ): moviesData.error ? (
        <Text>Error...</Text>
    ): ( 
<SafeAreaView>
  <ScrollView>
  <Card>
  <Card.Title style={styles.title}>Latest Movies</Card.Title>
  <Card.Divider/>
  {
    moviesData && moviesData.preducer && moviesData.preducer.movies &&  
    moviesData.preducer.movies.map((u,i)=>{
      return (
        <View style={styles.container} key={i}>
            <Card.Image  style={styles.imageContainer} source={{uri:u.imageUrl}}></Card.Image>
          <Text style={styles.textval}>{u.name}</Text>
                <Button
            onPress={() => navigation.navigate('Details',{id:u.id})}
            title='DETAILS' />
            <Text>{"\n"}</Text>
        </View>

      );
    })
  }
</Card>
  </ScrollView>
</SafeAreaView>     

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

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)



const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  textval:{
      textAlign:'center',
      fontSize:22,
      marginTop: 10  
  },
  title:{
      fontSize : 25,
      color:"black",
      textAlign:'center',
      padding:15
  },
imageContainer:{
    height:148,
    width: 100,
    alignSelf: "center"
}
})