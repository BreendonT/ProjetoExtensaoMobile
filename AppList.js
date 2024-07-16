import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AppList() {
  return (
    <ImageBackground source={require('./assets/FundoApp.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>Contagem Atual</Text>
        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' para ajustar a imagem
    justifyContent: 'center',
  },
  text: {
    fontSize: 60, // aumenta o tamanho do texto
    color: '#fff', // torna o texto branco
    fontWeight: 'bold', // define o texto em negrito
    textAlign: 'center', // centraliza o texto
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // adiciona sombra ao texto
    textShadowOffset: { width: 2, height: 2 }, // ajusta o deslocamento da sombra
    textShadowRadius: 10, // define o raio da sombra
  },
});
