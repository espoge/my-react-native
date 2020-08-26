import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
        <Text>Home screen</Text>
        <Button title="Go to Task Manager" onPress={()=>navigation.navigate('Task')}></Button>
  </View>
  );
}

const styles = StyleSheet.create({});
