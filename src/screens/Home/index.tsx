import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FriendsList from '../../components/FriendsList';

export default function Home() {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    try {
      const response = await fetch(`http://192.168.1.35:3333/friends?q=${name}`);
      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.log(error);
    }
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


        <FriendsList data={friends}/>
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