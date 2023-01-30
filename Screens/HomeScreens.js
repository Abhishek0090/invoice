import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateBill from './CreateBill'

export default function HomeScreens() {
  return (
    <View style={styles.container}>
    <CreateBill />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
      flex : 1,
      backgroundColor : '#fff',
  }

})