import { View, Text, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import { Friend } from './Friend';
import { FlashList } from '@shopify/flash-list';

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
    <View style={{flex: 1}}>
      <Text>
        Total de likes: {totalLikes}
      </Text>


      <FlashList 
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Friend key={String(item.id)} data={item} follow={follow}/> 
        )}
        estimatedItemSize={200}
      />       
    </View>
  )
}