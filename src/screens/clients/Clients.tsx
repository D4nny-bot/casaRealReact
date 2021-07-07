import React, { Component } from "react";
import {View, Text} from "react-native"; 
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import ClientsRegular from  './ClientsRegular';
import ClientPotencial from  './ClientsPotencial';
import AgendaNegocio from './AgendaNegocio';
const TopTab = createMaterialTopTabNavigator();
class Clients extends Component {
  render() {
    return (
    
            <TopTab.Navigator>
                <TopTab.Screen name = "ClientR" component={ClientsRegular}></TopTab.Screen>
                <TopTab.Screen name="ClientP" component={ClientPotencial}></TopTab.Screen>
                <TopTab.Screen name="Agenda" component={AgendaNegocio}></TopTab.Screen>
          </TopTab.Navigator>
        
    )
  }
}
export default Clients;