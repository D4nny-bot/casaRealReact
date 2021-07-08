import React, { Component } from "react";
import  {createStackNavigator} from '@react-navigation/stack';
import Reports from "../screens/reports/Reports";
import ClienteCaptado from "../screens/reports/ClientsCaps/ClienteCaptado";
import PedidosAcomodados from "../screens/reports/Pedidos/PedidosAcomodados";
import ClientePotencial from "../screens/reports/ClientPotenc/ClientePotencial";
import Negociaciones from "../screens/reports/Negociaciones/Negocios";
import ProductsVents from "../screens/reports/Ventas/ProdVendidos";
const Stack = createStackNavigator();

class ReportsNavigation extends React.Component<any,any>{
    render(){
        return(
              
                <Stack.Navigator screenOptions={
                    {
                     headerTransparent: true   
                    }
                }>
                    <Stack.Screen 
                        name="Reports" 
                        component={Reports}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name="ClienteCaptado" 
                        component={ClienteCaptado}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name="PedidosAcomodados" 
                        component={PedidosAcomodados}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name="ClientePotencial" 
                        component={ClientePotencial}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name="Negociaciones" 
                        component={Negociaciones}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name="ProductsVents" 
                        component={ProductsVents}
                        options={{
                            headerShown:false
                        }}
                    />
                </Stack.Navigator>
         
        )
    }
}

export default ReportsNavigation;