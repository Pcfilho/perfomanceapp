import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FriendsList from '../../components/FriendsList';

export default function Home() {
  const [name, setName] = useState('');

  function handleSearch() {

  }

  return (
    <View style={styles.container}>
        <Text>Amigos</Text>

        <TextInput 
          placeholder='Nome do amigo'
          onChangeText={setName}
          style={styles.input}
        />

        <Button 
          title='Buscar'
          onPress={handleSearch}
        />


        <FriendsList data={[]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
  }
})