import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,FlatList } from 'react-native';
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput';
import MainNavigation from './navigation/MainNavigation'
export default function App() {
  return <MainNavigation />
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
