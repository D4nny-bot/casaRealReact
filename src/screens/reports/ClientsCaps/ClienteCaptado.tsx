import React, { Component } from "react";
import {View, Text} from "react-native"; 
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import Mes from "./Mes";
import Semana from "./Semana";
import AlDia from "./AlDia";

const TopTab = createMaterialTopTabNavigator();

class ClienteCaptado extends Component {
  render() {
    return (
        <TopTab.Navigator>
          <TopTab.Screen name="Al Dia" component={AlDia}></TopTab.Screen>
          <TopTab.Screen name="Semana" component={Semana}></TopTab.Screen>
          <TopTab.Screen name="Mes" component={Mes}></TopTab.Screen>
        </TopTab.Navigator>
    )
  }
}
export default ClienteCaptado;