import { View, Text } from 'react-native'
import React from 'react'
import { Friend } from './Friend';

type Data = {
  id: number;
  name: string;
  likes: number;
}

type Props = {
  data: Data[];
}

export default function FriendsList({
  data
} : Props) {
  return (
    <View>
      {
        data.map(friend => (
          <Friend key={String(friend.id)} data={friend}/>
        ))
      }
    </View>
  )
}