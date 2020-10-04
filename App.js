import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TodoList from './src/screens/TodoList';
import ActiveList from './src/screens/Active';

import { AntDesign } from "@expo/vector-icons";
import useDataContext, { DataTodoContext } from './src/contexs/DataTodoList';

const Tab = createBottomTabNavigator();

const routeIcons = {
  TodoList: "pluscircleo",
  ActiveList: "infocirlceo",
};

export default function App() {

  const dataTodoContex = useDataContext()

  return (
    <>
      <DataTodoContext.Provider value={dataTodoContex}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name={routeIcons[`${route.name}`]}
                  size={24}
                  color={focused ? "blue" : "grey"}
                />
              ),
            })}
            tabBarOptions={{
              activeTintColor: "blue",
              inactiveTintColor: "grey",
              style: {
                backgroundColor: '#ffefa0',
              },
            }}
          >
            <Tab.Screen name="TodoList" component={TodoList} />
            <Tab.Screen name="ActiveList" component={ActiveList} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <TodoList /> */}
      </DataTodoContext.Provider>
    </>
  );
}

