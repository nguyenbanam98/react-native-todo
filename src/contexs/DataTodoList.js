import { createContext, useState } from "react";
import { todos } from "../datas/data"


export const DataTodoContext = createContext({})

const useDataContext = () => {
  const [todoList, setTodoList] = useState(todos)

  const onToggleTodo = (id) => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = (inputValue) => {
    console.log('add: ', inputValue);
    const newTodo = {
      id: todoList.length + 1,
      ...inputValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
  };



  return {
    todoList,
    onToggleTodo,
    onDeleteTodo,
    onSubmitTodo
  }
}

export default useDataContext;