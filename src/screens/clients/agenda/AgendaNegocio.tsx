import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper"; 
class ClientsPotencial extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View>
        

        </View>
        <View>
          

        </View>
        <FAB
          style={styles.fab}
          small={false}
          icon="book-account"
          //icon="check, bell, star, camera, email"
          //icon="file-upload"
          onPress={() => {
          }}
        />
      </View>
  )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
export default ClientsPotencial;