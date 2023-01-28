import { View, Text } from 'react-native'
import React, { memo } from 'react'

type Data = {
  name: string;
  likes: number;
}

type Props = {
  data: Data;
}

function FriendComponent({
  data
} : Props) {
  return (
      <Text>
        { data.name } - Likes: { data.likes }
      </Text>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
})