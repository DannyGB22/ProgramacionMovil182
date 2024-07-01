import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';

const data = [
  { key: '1', name: 'Avengers End Game' },
  { key: '2', name: 'Intensa Mente 2' },
  { key: '3', name: 'Deadpool 3' },
  { key: '4', name: 'Dragon Ball Super' },
  { key: '5', name: 'Piratas del Caribe' },
  { key: '6', name: 'Aquaman 2' },
  { key: '7', name: 'Thor Amor y Trueno' },
  { key: '8', name: 'El Hobbit' },
  { key: '9', name: 'Tu Mejor Amigo' },
  { key: '10', name: 'Los Indestructibles' },
  { key: '11', name: 'Rápidos & Furiosos X' },
  { key: '12', name: 'Megalodon' },
  { key: '13', name: 'Top Gun' },
  { key: '14', name: 'Your Name' },
  { key: '15', name: 'Demon Slayer' },
];

export default function App() {

  const [BuscarText, setBuscarText] = useState('');
  const [filtrarData, setFiltrarData] = useState([]);
  const [mostrarList, setMostrarList] = useState(false);

  const Buscador = () => {
    setMostrarList(true);
    if (BuscarText === '') {
      setFiltrarData(data);
      return;
    }

    const results = data.filter(item =>
      item.name.toLowerCase().includes(BuscarText.toLowerCase())
    );

    if (results.length === 0) {
      Alert.alert('Sin resultados','No existen coincidencias en la lista');
    } else {
      setFiltrarData(results);
    }
  };

  return (
    <ImageBackground source={require('./fond.jpeg')} style={styles.container} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.text}>Buscador de Peliculas</Text>
        
        <TextInput style={styles.input} placeholder='Titulo o parte...' value={BuscarText} onChangeText={setBuscarText}/>
       
        <Button title="Buscar" color="green" onPress={Buscador} />
        
        {mostrarList && (
          <FlatList
            data={filtrarData}
            renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: '2%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginTop: 30,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 22,
    borderWidth: 4,
    borderColor: 'white',
    padding: 10,
    borderRadius: 45,
    textAlign: 'center',
    color: 'white',
  },
  item: {
    padding: 8,
    fontSize: 22,
    height: 44,
    borderColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
});
