import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import {TextInput, Button, Avatar, RadioButton} from "react-native-paper";
import {StackNavigationProp} from "@react-navigation/stack";
import axios, { AxiosResponse } from "axios";
import AppContext from "../../../context/AppContext";

interface ItemUser{
    fullname?: string,
    surname?: string,
    telephone?: string,
    email?: string,
    //probability?: number,
    address?: string,
    type?: string
    
}
interface Mystate {
    fullname: string,
    surname: string,
    telephone: string,
    email: string,
    //probability: number,
    address: string,
    type: string,
    isload: boolean,
    pathImg?: string
}
interface IParams {
    reloadContext: Function
}
interface IRoute {
    params: IParams
}
interface MyProps {
    navigation: StackNavigationProp<any, any>;
    route: IRoute
}
class RegisterClientsP extends Component<MyProps, Mystate> {
    static contextType = AppContext;
    constructor(props: any) {
        super(props);
        this.state = {
            isload: false,
            fullname: "", surname: "", telephone: "", email:"", address:"", type: "potencial"
        }
    }
    async checkandSendData() {
        var navigation:StackNavigationProp<any, any> = this.props.navigation;
        console.log(this.state);
        
        var result: any = await axios.post<ItemUser, AxiosResponse<any>>("http://192.168.0.4:8000/api/clients", this.state)
        .then((response) => {
            return response.data;
        });
        console.log(result);
        if (this.state.isload) {
            var data = new FormData();
            data.append("avatar", {
            name: "avatar.jpg", 
            uri: this.state.pathImg, 
            type: "image/jpg"});
            console.log("http://192.168.0.4:8000/api/uploadphoto/" + result.serverResponse._id)
            fetch("http://192.168.0.4:8000/api/uploadphoto/" + result.serverResponse._id, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: data
            }).then((result) => {
                result.json();
            }).then((result) => {
                console.log(result);
                navigation.pop();
            });
            var {loadMainListUsers} = this.context;
            await loadMainListUsers();
            return;
        }
        var {loadMainListUsers} = this.context;
        await loadMainListUsers();
        this.props.route.params.reloadContext();
        navigation.navigate("list");
        
    }
    onTakePicture(path: string) {
        //console.log(path);
        this.setState({
            pathImg: path,
            isload: true
        })
    }
    showAvatar() {
        if (this.context.uriphoto != "") {
            return <Avatar.Image size={150} source={{uri: this.context.uriphoto}} />
        } else {
            return <Avatar.Image size={150} source={require('../../../../assets/img/music.jpg')} />
            
        }
    }
  render() {

    return (
      <View style= {styles.container}>
          <TextInput style={styles.txtStyles}
          label="Nombres"
          onChangeText={text => {  
              this.setState({
                  fullname: text
              })
          }}/>
          <TextInput style={styles.txtStyles}
          label="Apellidos"
          onChangeText={text => {   
              this.setState({
                  surname: text
              })
          }}/>
          <TextInput style={styles.txtStyles}
          label="Telefono"
          onChangeText={text => {   
              this.setState({
                  telephone: text
              })
          }}/>
          <TextInput style={styles.txtStyles}
          label="Email"
          onChangeText={text => {   
              this.setState({
                  email: text
              })
          }}/>
          
          <TextInput style={styles.txtStyles}
          label="Dirección exacta"
          onChangeText={text => {   
              this.setState({
                  address: text
              })
          }}/>
          
        <View style={styles.avatarView}>
              
        </View>
          <View style={styles.botons}>
          <Button style={styles.txtStyles} icon="camera" mode="contained" onPress={() => {
              
            }}>
                Foto
            </Button>
            
            <Button style={styles.botom} icon="shield-account" mode="contained" onPress={() => { 
                this.checkandSendData();
             }}>
                Create
            </Button>
          </View>
          
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 0.5
  },
  txtStyles: {
      marginTop: 0.5
      
  },
  avatarView: {
      alignItems: "center"
  },
  botom: {
    marginLeft: 1
  },
  botons: {
      flexDirection: "row",
      justifyContent: "center",
      //width: "50%"
      //alignContent: "center",
      //alignItems: "center",
  }
  
}   
);
export default RegisterClientsP;