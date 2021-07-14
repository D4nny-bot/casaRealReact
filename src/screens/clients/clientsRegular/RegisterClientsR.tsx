import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import {TextInput, Button, Avatar, RadioButton} from "react-native-paper";
import AppContext from "../../../context/AppContext"
import {Types} from "../../../context/ContantTypes";
import axios from "axios";

class RegisterClientsR extends Component {
  render() {
    
    return (
      <View style= {styles.container}>
          <TextInput style={styles.txtStyles}
          label="nom"
          onChangeText={text => {  
              this.setState({
                  username: text
              })
          }}/>
          <TextInput style={styles.txtStyles}
          label="Apellidos"
          onChangeText={text => {   
              this.setState({
                  email: text
              })
          }}/>
          <TextInput style={styles.txtStyles}
          label="Email"
          onChangeText={text => {   
              this.setState({
                  password: text
              })
          }}/>
          <TextInput style={styles.txtStyles}
          label="Direccion"
          onChangeText={text => {   
              this.setState({
                  repassword: text
              })
          }}/>
         
          

          <TextInput style={styles.txtStyles}
          label="Telefono"
          onChangeText={text => {   
              this.setState({
                  repassword: text
              })
          }}/>
          
          <Button style={styles.txtStyles} icon="camera" mode="contained" onPress={() => {
              
          }}>
              Foto
          </Button>
          <View style={styles.avatarView}>
            
          </View>
          <Button style={styles.txtStyles} icon="shield-account" mode="contained" onPress={() => {
            
          }}>
              Create
          </Button>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 2
  },
  txtStyles: {
      marginTop: 2
  },
  avatarView: {
      alignItems: "center"
  },
  
}   
);
export default RegisterClientsR;