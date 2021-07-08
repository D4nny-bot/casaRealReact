import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Users from "./users/Users";
import Clients from "./clients/Clients";
import ListClients from './clients/ListClients';
import Order from "./Order";
import ReportsNavigation from "../navigation/ReportsNavigation";
import Icons from "react-native-vector-icons/AntDesign";
import MyColors from "../color/MyColors"

const Tab = createBottomTabNavigator();
class MainApp extends Component {
  render() {
    return (
        <NavigationContainer independent={true}>
          <Tab.Navigator
          screenOptions={({route}) => ({
            
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Usuarios': {
                  if (focused) {
                    return <Icons name="adduser" size={23} color={MyColors.secondary} />;
                  } else {
                    return <Icons name="adduser" size={23} color={MyColors.thirth} />;
                  }
                }
                case 'Clientes': {
                    if (focused) {
                      return <Icons name="deleteusergroup" size={23} color={MyColors.secondary} />;
                    } else {
                      return <Icons name="deleteusergroup" size={23} color={MyColors.thirth} />;
                    }
                }
                case 'Pedidos': {
                  if (focused) {
                    return <Icons name="exception1" size={23} color={MyColors.secondary}/>;
                  } else {
                    return <Icons name="exception1" size={23} color={MyColors.thirth} />;
                  }
                }
                case 'Reportes': {
                  if (focused) {
                    return (
                      <Icons name="barschart" size={23} color={MyColors.secondary} />
                    );
                  } else {
                    return (
                      <Icons name="barschart" size={23} color={MyColors.thirth} />
                    );
                  }
                }
              }
            },
          })}
          >
            <Tab.Screen name="Usuarios" component={Users} />
            <Tab.Screen name="Clientes" component={Clients} />
            <Tab.Screen name="Pedidos" component={Order} />
            <Tab.Screen name="Reports" component={ReportsNavigation} />
          </Tab.Navigator>
        </NavigationContainer>
      )
  }
}
export default MainApp;