import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper"; 
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import RegisterClientsP from "./RegisterClientsP";



const TopTab = createMaterialTopTabNavigator();

interface MyProps {
  navigation: StackNavigationProp<any, any>
}
class ClientsPotencial extends Component<MyProps, any> {

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
          icon="account-star"
          //icon="check, bell, star, camera, email"
          //icon="file-upload"
          onPress={() => {
            this.props.navigation.navigate("RegisterClientsP");
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