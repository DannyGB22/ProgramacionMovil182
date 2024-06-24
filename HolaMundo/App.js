import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('Valor Default');
  const [submit, setSubmit] = useState('');

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>

      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      <Text> Componente TextInput: {submit} </Text>
      
      <TextInput style={styles.input} placeholder="Creacion de input" onChangeText={(t) => setText(t)} value={text}/>

      <Button title="Presioname"onPress={() =>{setSubmit(text); alert("Texto enviado");}}/>

      <TouchableHighlight style={styles.touchableHighlight} underlayColor="blue" onPress={() => alert("TouchableHighlight presionado")}>
        <Text style={styles.touchableText}>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableOpacity style={styles.touchableOpacity} onPress={() => alert("TouchableOpacity presionado")}>
        <Text style={styles.touchableText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => alert("TouchableWithoutFeedback presionado")}>
        <View style={styles.touchableWithoutFeedback}> 
          <Text style={styles.touchableText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>

      </ScrollView>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 22,
    borderWidth: 4,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 45,
    textAlign: 'center',
  },
  touchableHighlight: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  touchableOpacity: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  touchableWithoutFeedback: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  touchableText: {
    color: 'white',
  },

  scrollView:{
    width:Dimensions.get('window').width,
  },
});
