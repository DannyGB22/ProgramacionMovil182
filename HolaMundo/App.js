import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {

  const [user, setUser]= useState([])
  const [loading, setLoading] = useState([true])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{setUser(data), setLoading(false)})
  },[])

  if(loading){
    return <View style={styles.center}>
      <ActivityIndicator size='large' color='blue'/>
      <Text>Cargando</Text>
    </View>
  }


  return (
    <View style={styles.container}>

      <Text>Usuarios Cargados</Text>

      <FlatList 
      data={user}

      renderItem={({item})=><Text style={styles.item}>{item.name} {item.address.city}</Text>}>

     </FlatList>
      
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop:40,
  },

  item:{
    padding:10,
    fontSize:22,
    height:44,
    borderColor:'blue',
    borderBottomWidth:1,
  },
  center:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',

  },
});
