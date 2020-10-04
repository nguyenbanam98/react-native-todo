import React, { useState, useContext } from 'react'
import { DataTodoContext } from '../../contexs/DataTodoList'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import Item from './components/Item'
import AddTodoList from './components/AddTodoList'

const image = { uri: "https://cdn.voh.com.vn/voh/Image/2019/12/24/98TrieuLoTu1_20191224160307.jpg" };

export default function index() {

  const { todoList, onToggleTodo, onDeleteTodo, onSubmitTodo } = useContext(DataTodoContext)


  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>

        <Text style={styles.text}>
          Todo List
        </Text>

        <AddTodoList onSubmitTodo={onSubmitTodo} />

        <ScrollView>
          {
            todoList.map((todo, index) => {
              return (
                <Item
                  key={todo.id}
                  index={index}
                  todo={todo}
                  onToggleTodo={onToggleTodo}
                  onDeleteTodo={onDeleteTodo}
                />
              )
            })
          }
        </ScrollView>
      </ImageBackground>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#F130B1',
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
