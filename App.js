import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import concert from './assets/concert.png';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);


  const [tickets, setTickets] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket Vault</Text>

      <TextInput style={styles.boxInput} placeholder="Number of Tickets"
        onChangeText={newTickets => setTickets(newTickets)}
        defaultValue={tickets}>
      </TextInput>
      
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setTickets(tickets * 99.99);
      }}>
        <Text style={styles.buttonText}>Find the Cost</Text>
      </TouchableOpacity>

      <Text style={styles.cost}>Ticket Cost: ${tickets}
      </Text>

      <Image source={concert} style={styles.picture} />

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
  title: {
    fontSize: 50,
    position: 'relative',
    fontWeight: 'bold',
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#f98b88',
    borderRadius: 3,
    padding: 15,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold',
  },
  boxInput: {
    fontSize: 40,
    borderstyle: 'solid',
    borderColor: 'gray',
    borderWidth: 2,
    padding: 6,
  },
  picture: {
    marginTop: 150,
  },
  cost: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold',
    top: 40,
  },
});
