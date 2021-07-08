import React, { Component } from "react";
import {View, Text} from "react-native"; 
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import AlDia from "./AlDia";
import Mes from "./Mes";
import Semana from "./Semana";

const TopTab = createMaterialTopTabNavigator();

class Negociaciones extends Component {
  render() {
    return (
        <TopTab.Navigator>
          <TopTab.Screen name ="AlDia" component={AlDia}></TopTab.Screen>
          <TopTab.Screen name="Semana" component={Semana}></TopTab.Screen>
          <TopTab.Screen name="Mes" component={Mes}></TopTab.Screen>
        </TopTab.Navigator>
    )
  }
}
export default Negociaciones;