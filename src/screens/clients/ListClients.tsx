import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native"; 
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import ClientsRegular from  './clientsRegular/ClientsRegular';
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import ClientPotencial from  './clientsPotencial/ClientsPotencial';
import AgendaNegocio from './agenda/AgendaNegocio';
const TopTab = createMaterialTopTabNavigator();
class ListClients extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopTab.Navigator>
          <TopTab.Screen name = "ClientR" component={ClientsRegular}></TopTab.Screen>
          <TopTab.Screen name="ClientP" component={ClientPotencial}></TopTab.Screen>
          <TopTab.Screen name="Agenda" component={AgendaNegocio}></TopTab.Screen>
        </TopTab.Navigator>
        <View>
        
        </View>
        
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
export default ListClients;