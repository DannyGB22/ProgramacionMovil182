import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showAlert = () => {
    alert(
      `Nombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`,
      [{ text: "OK" }]
    );
  };

  return (
    <ImageBackground source={require('./fondo.jpg')} style={styles.outerContainer} resizeMode="cover">
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Nombre:</Text>
        <TextInput style={styles.input} onChangeText={(t) => setNombre(t)} value={nombre} />

        <Text style={styles.text}>Email:</Text>
        <TextInput style={styles.input} onChangeText={(t) => setEmail(t)} value={email} />

        <Text style={styles.text}>Password:</Text>
        <TextInput style={styles.input} onChangeText={(t) => setPassword(t)} value={password} secureTextEntry />

        <View style={styles.buttonContainer}>
          <Button color="black" title="Guardar" onPress={showAlert} />
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center', // Alineado al centro horizontalmente
    justifyContent: 'center', // Alineado al centro verticalmente
  },
  innerContainer: {
    backgroundColor: '#fff', // Fondo blanco
    padding: 20, // Padding agregado
    borderRadius: 10, // Bordes redondeados
    alignItems: 'center', // Alineado al centro horizontalmente
    width: '90%', // Usar el 90% del ancho del contenedor
  },
  input: {
    height: 40,
    width: '80%', // Usar el 80% del ancho del contenedor
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    textAlign: 'left', // Alineación a la izquierda
    color: 'green', 
    width: '80%', // Ancho del texto al 80% del contenedor
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%', // Ancho del contenedor del botón al 80%
  },
});
