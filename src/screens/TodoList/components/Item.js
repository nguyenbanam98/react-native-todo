import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'

export default function Item({ index, todo, onToggleTodo, onDeleteTodo }) {

  const onLongPress = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity
      style={[styles.listContainer, { backgroundColor: todo.status === 'Done' ? '#F82D46' : '#2DE7DC' }]}
      onPress={() => onToggleTodo(todo.id)}
      onLongPress={() => onLongPress(todo)}
    >
      <Text style={styles.txtItem}>{index + 1}: {todo.body}</Text>
    </TouchableOpacity>
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
