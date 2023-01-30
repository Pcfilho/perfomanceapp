import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { Friend } from './Friend';

type Data = {
  id: number;
  name: string;
  likes: number;
}

type Props = {
  data: Data[];
  follow: () => void;
}

export default function FriendsList({
  data,
  follow
} : Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes += friend.likes
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>
        Total de likes: {totalLikes}
      </Text>

      {
        data.map(friend => (
          <Friend key={String(friend.id)} data={friend} follow={follow}/>
        ))
      }
    </View>
  )
}