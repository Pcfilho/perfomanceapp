import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

type Data = {
  name: string;
  likes: number;
}

type Props = {
  data: Data,
  follow: () => void;
}

function FriendComponent({
  data,
  follow
} : Props) {
  return (
    <View style={{
      marginBottom: 10,
    }}>

      <Text>
        { data.name } - Likes: { data.likes }
      </Text>
    
      <TouchableOpacity onPress={follow}>
        <Text>Deixar de Seguir</Text>
      </TouchableOpacity>
    </View>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
})