import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';


const Texto=({estilo})=>{
  const [contenido,setContenido] = useState('holaMundo')
  const actualizarContenido=()=>{setContenido('State actualizo este texto')}
  return(<Text style={[styles.text, estilo]} onPress={actualizarContenido}>{contenido}</Text>)
}


export default function App() {
  return (

    <View style={styles.container}>

      
      <Texto estilo={styles.red}/>
      <Texto estilo={styles.blue}/>
      <Texto estilo={styles.green}/>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text:{
    color:'yellow',
    fontSize:25,
    height:150,
    width:150,
  },

  red:{
    // flex: 1,
    backgroundColor:'red'
  },
  blue:{
    // flex: 2,
    backgroundColor:'blue'
  },
  green:{
    // flex: 3,
    backgroundColor:'green'
  }
});
