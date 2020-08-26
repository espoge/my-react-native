import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TaskItem({item, onHandleDelete}) {
  return (
      <TouchableOpacity onPress={()=>onHandleDelete(item.id)}>
      <View style={styles.taskList}>
        <Text>{item.value}</Text>
      </View>
      </TouchableOpacity>  
  );
}

const styles = StyleSheet.create({
  taskList:{
    padding:10,
  }
});
