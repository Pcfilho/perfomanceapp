import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
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

  const handleFollow = useCallback(() => {
    console.log("follow user");
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Amigos</Text>

        <TextInput 
          placeholder='Nome do amigo'
          onChangeText={setName}
          style={styles.input}
        />

        <Button 
          title='Buscar'
          onPress={handleSearch}
        />

        <View style={styles.list}>
            <FriendsList data={friends} follow={handleFollow}/>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 16,
    flex: 1,
  }
})