import React, { useState }from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function TaskInput({onHandleInput}) {
  const [enterTask,setEnterTask] = useState('')
  const handleTaskInput = value => {
    setEnterTask(value)
  };
  const handleInput = enterTask =>{
    onHandleInput(enterTask)
    setEnterTask('')
  }
  return (
    <View>
    <TextInput placeholder="Insert task" style={styles.mainInput} onChangeText={handleTaskInput} value={enterTask} />
    <Button title="Insert" onPress={()=>handleInput(enterTask)}/>
  </View>
  );
}

const styles = StyleSheet.create({
  mainInput:{
    padding:10,
    borderWidth: 1,
    borderColor:'black',
    marginBottom:10
  },
});
