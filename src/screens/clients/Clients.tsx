import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {Appbar} from "react-native-paper";
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import ClientsRegular from  './clientsRegular/ClientsRegular'
import ClientPotencial from  './clientsPotencial/ClientsPotencial';
import AgendaNegocio from './agenda/AgendaNegocio';
import ListClients from './ListClients';
import registerClientsR from './clientsRegular/RegisterClientsR';
import registerClientsP from './clientsPotencial/RegisterClientsP';

//const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
var Stack = createStackNavigator();

class Clients extends Component {

  render() {
    const {searchbarVisible, changeSearchBarVisible} = this.context;
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="list" component={ListClients} options={() => (
              {header: () => <Appbar.Header>
                <Appbar.Content title="Gestor de Clientes" subtitle={'Todos los clientes'} />
                 <Appbar.Action icon="magnify" onPress={() => {
                   changeSearchBarVisible(!searchbarVisible);
                 }} />
                 {/*<Appbar.Action icon={MORE_ICON} onPress={() => {}} />*/}
             </Appbar.Header>}
            )}/> 
            <Stack.Screen name="RegisterClientsR" component={registerClientsR} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Registro de Clientes" subtitle={'Regulares'} />
             </Appbar.Header>}
            )}/>
            <Stack.Screen name="RegisterClientsP" component={registerClientsP} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Registro de Clientes" subtitle={'Potenciales'} />
             </Appbar.Header>}
            )}/>
          </Stack.Navigator>
        </NavigationContainer>
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
export default Clients;