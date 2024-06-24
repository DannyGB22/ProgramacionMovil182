import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList} from 'react-native';
// import React, { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>

      <FlatList 
      data={[
      {key:1,name:'Daniel'},
      {key:2,name:'Jean'},
      {key:3,name:'Carlo'},
      {key:4,name:'Alex'},
      {key:5,name:'Joseph'},
      {key:6,name:'Deniss'},
      {key:7,name:'Tania'},
      {key:8,name:'Tania'},
      {key:9,name:'Tania'},
      {key:10,name:'Tania'},
      {key:11,name:'Tania'},
      {key:12,name:'Tania'},
      {key:13,name:'Tania'},
      {key:14,name:'Tania'},
      {key:15,name:'Tania'},
      {key:16,name:'Tania'},
      {key:17,name:'Tania'},
      {key:18,name:'Tania'},
      {key:19,name:'Tania'},
      {key:20,name:'Tania'},
      {key:21,name:'Tania'},
      {key:22,name:'Tania'},
      
      
    ]}
  
       renderItem={({item})=><Text style={styles.item}>{item.name}</Text>} >
      
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
});
