import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function AddTodoList({ onSubmitTodo }) {

  const [value, setValue] = useState('');

  const handleAdd = () => {

    if (!onSubmitTodo) return;
    const inputValue = {
      body: value,

    }
    onSubmitTodo(inputValue)

    setValue('')

  }
  return (
    <>
      <View style={styles.inputContainer}>

        <View style={{ width: '75%', borderWidth: 1, height: 40, }}>

          <TextInput
            value={value}
            style={styles.todoInput}
            onChangeText={text => setValue(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleAdd}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  todoInput: {
    flex: 1,
    color: '#0B0E11',
    borderColor: 'grey',
    marginHorizontal: 10
  },
  inputContainer: {
    width: '90%',
    marginBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20


  },
  button: {
    height: 40,
    width: '20%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#1B56A7',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
