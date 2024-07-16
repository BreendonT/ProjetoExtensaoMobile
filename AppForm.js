import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function AppForm() {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchTotalCount();
  }, []);

  const fetchTotalCount = async () => {
    try {
      const response = await fetch('http://192.168.250.14:4001/contagem');
      const data = await response.json();
      if (data && data.length > 0) {
        const firstDevice = data[0];
        setTotalCount(firstDevice.total_count);
      } else {
        console.error('Dados da API vazios ou em formato incorreto');
      }
    } catch (error) {
      console.error('Erro ao buscar total de contagem:', error);
    }
  };

  return (
    <ImageBackground source={require('./assets/FundoApp.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Estado Contagem Atual</Text>
        <View style={styles.totalCountContainer}>
          <Text style={styles.totalCountText}>{totalCount}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={fetchTotalCount}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  totalCountContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalCountText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
