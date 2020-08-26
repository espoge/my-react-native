import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,FlatList } from 'react-native';
import TaskItem from '../components/TaskItem'
import TaskInput from '../components/TaskInput';
export default function TaskScreen() {
  const [tasks,setTasks] = useState([])


const addTask = task => {
  setTasks(tasks=>[...tasks,{id: Math.random().toString(), value:task}])
}
const deleteTask = id =>{
  setTasks(tasks=>{
    return tasks.filter(task=>task.id !== id)
  })
  
}
  return(
    <View style={styles.container}>
    <View>
      <TaskInput onHandleInput={addTask}/>
    </View>
    <FlatList 
        keyExtractor={(item,index)=>item.id}
        data={tasks} 
        renderItem={itemData => <TaskItem item={itemData.item} onHandleDelete={deleteTask}/>}>
    </FlatList>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
