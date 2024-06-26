import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SectionList} from 'react-native';
// import React, { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>

      <SectionList
      sections={[
        { title:'Grupo A',
          data:[
              {key:1,name:'Daniel'},
              {key:2,name:'Jean'},
              {key:3,name:'Carlo'},
              {key:4,name:'Alex'},
              {key:5,name:'Joseph'},
              {key:6,name:'Deniss'},
              {key:7,name:'Tania'},
              
            
          ]
        },
        { title:'Grupo B',
          data:[
              {key:1,name:'Daniel'},
              {key:2,name:'Jean'},
              {key:3,name:'Carlo'},
              {key:4,name:'Alex'},
              {key:5,name:'Joseph'},
              {key:6,name:'Deniss'},
              {key:7,name:'Tania'},
              
            
          ]
        },
        { title:'Grupo C',
          data:[
              {key:1,name:'Daniel'},
              {key:2,name:'Jean'},
              {key:3,name:'Carlo'},
              {key:4,name:'Alex'},
              {key:5,name:'Joseph'},
              {key:6,name:'Deniss'},
              {key:7,name:'Tania'},
              
            
          ]
        }
      ]} 
      renderItem= { ({item})=> <Text style={styles.item}>{item.name}</Text>}
      renderSectionHeader= { ({section})=> <Text style={styles.section}>{section.title}</Text>}
     />
      
      
      
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
  section:{
    fontSize:22,
    fontWeight:'bold',
    backgroundColor:'blue',
    paddingTop:4,
    paddingBottom:4,

  },
});
