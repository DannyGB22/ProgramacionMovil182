import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import* as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


function homeScreen({navigation}){
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title="Ir a detalles"></Button>
    </View>
  );

}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



