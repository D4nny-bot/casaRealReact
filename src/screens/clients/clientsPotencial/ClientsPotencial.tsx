import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper"; 
import { createMaterialTopTabNavigator } from  '@react-navigation/material-top-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import RegisterClientsP from "./RegisterClientsP";
import AppContext from "../../../context/AppContext";
import {Types} from "../../../context/ContantTypes";
import axios from "axios";

const TopTab = createMaterialTopTabNavigator();
export interface IReunion {
  _id: string,
  fecha: string,
  hora:  string,
  result: boolean,
}
export interface ItemClient{
  _id: string,
  fullname: string,
  surname: string,
  email: string,
  type: string,
  registerdate: string,
  reunion: Array<IReunion>,
  pathphoto?: string,
  uriphoto?: string
}
interface ServerResponse {
  serverResponse:Array<ItemClient>
}
interface MyState {
  dataclients: Array<ItemClient>,
  completeList: Array<ItemClient>,
  searchKey: string
}
interface ItemData {
  item: ItemClient
}
interface MyProps {
  navigation: StackNavigationProp<any, any>
}
class ClientsPotencial extends Component<MyProps, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      dataclients: [],
      searchKey : "",
      completeList: []
    }
  }
  async componentDidMount() {
    console.log(this.context);
    var result: Array<ItemClient> = await axios.get<ServerResponse>("http://192.168.0.4:8000/api/clients/type/potencial").then((item) => {
      return item.data.serverResponse
    });
    this.setState({
      dataclients: result,
      completeList: result,
    });
  }
  listItem(item: ItemClient) {
    const {dispatch} = this.context;
    if (item.uriphoto == null) {
      return <List.Item
      title={item.fullname}
      description={item.email}
      onPress={() => {
          
      }}
      left={props => <List.Icon {...props} icon="incognito" />}
      />
    } else {
      var uriImg: string = "http://192.168.0.4:8000" + item.uriphoto;
      return <List.Item
                title={item.fullname}
                description={item.email}
                onPress={() => {
                  
              }}
                left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
      />
    } 
  }
  searchList(key: string) {
    this.setState({
      searchKey: key
    });
    var result: Array<ItemClient> = this.state.completeList.filter((item) => {
      var regx = new RegExp(key, "i");
      if (item.fullname.match(regx) != null) {
        return true;
      }
      return false;
    });
    if (result.length == 0) {
      // Buscar dentro del servidor
      //Consumir una API. y poder revisar ese resltado en la base de datos

    } else {
      this.setState({
        dataclients: result
      }); 
    }
    
  }
  render() {
    var {searchbarVisible} = this.context;
    return (
      <View style={styles.container}>
        
        <View>
        {
            searchbarVisible && 
            <Searchbar
            placeholder="Buscar"
            value={this.state.searchKey}
            onChangeText={(msn) => {
              this.searchList(msn);
            }}
            />
        }
        </View>
        <View>
        <FlatList
              data={this.state.dataclients}
              renderItem={({item}) => (
                this.listItem(item)
              )}
              keyExtractor={(item) => item._id}
            />

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