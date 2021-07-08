import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native"; 
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import { StackNavigationProp } from '@react-navigation/stack';
import RegisterClientsR from "./RegisterClientsR";

import Icons from "react-native-vector-icons/AntDesign";
const TopTab = createMaterialTopTabNavigator();

interface MyProps {
  navigation: StackNavigationProp<any, any>
}

class ClientsRegular extends Component<MyProps, any> {

  

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
          icon="account-edit"
          //icon="check, bell, star, camera, email"
          //icon="file-upload" seleccionar el icon de oblador MaterialCommunityIcons
          onPress={() => {
            this.props.navigation.navigate("RegisterClientsR");
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
export default ClientsRegular;