import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function IitemActive({ index, todo }) {
  return (
    <View
      style={[styles.listContainer, { backgroundColor: '#2DE7DC' }]}

    >
      <Text style={styles.txtItem}>{index + 1}: {todo.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    // marginHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    // height: 30,
    alignSelf: 'flex-start',
    borderRadius: 5,

  },
  txtItem: {
    lineHeight: 34,
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
    paddingHorizontal: 10

  }
})
