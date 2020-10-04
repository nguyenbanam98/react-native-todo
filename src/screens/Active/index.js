import React, { useContext } from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import { DataTodoContext } from '../../contexs/DataTodoList'
import IitemActive from './components/IitemActive'

const image = { uri: "https://img.lostbird.vn/2020/06/83076007_1009993816082386_7927256969581292240_o.jpg" }

export default function ActiveList() {
  const { todoList } = useContext(DataTodoContext)
  const newTodoList = todoList.filter(todo => {
    return todo.status === 'Active'
  })
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>

        <Text style={styles.text}>
          Active List
      </Text>

        <ScrollView>
          {
            newTodoList.map((todo, index) => {
              return (
                <IitemActive
                  key={todo.id}
                  index={index}
                  todo={todo}
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
