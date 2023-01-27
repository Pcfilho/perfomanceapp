import { View, Text } from 'react-native'
import React from 'react'

type Data = {
  name: string;
  likes: number;
}

type Props = {
  data: Data;
}

export default function Friend({
  data
} : Props) {
  return (
      <Text>
        { data.name } - Likes: { data.likes }
      </Text>
  )
}