import React from "react";
import {View, Image, StyleSheet, ImageBackground, Alert} from "react-native";
import {TextInput, Button} from "react-native-paper";
import AppContext from "../context/AppContext"
import { StackNavigationProp } from "@react-navigation/stack";
import MainApp from './MainApp';
import { NavigationContainer } from "@react-navigation/native";


interface MyState {
      username: String,
      password: String,
      visible: boolean
}
interface MyProps {
    navigation: StackNavigationProp<any, any>
}
export interface IGoogleUser {
  photo: string
  email: string
  familyName?: string
  givenName: string
  name: string
  id: string
}
class Login extends React.Component<MyProps, any> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      visible: true
    }
  }
  login() {
    
    if (true) {
      this.props.navigation.navigate("main");
    }    
  
  }
  render() {
    return <ImageBackground style={styles.body} source={require("../../assets/img/FONDOREALCASA.png")}>
        <View style={styles.centerObjects}>
          <Image style={styles.logo} source={require("../../assets/img/REALCASAB.png")}/>
        </View>
        <View style={styles.containerTextfield}>
          <TextInput
            label="Username"
            
            onChangeText={(text) => {
              this.setState({
                username: text
              })
            }}
          />
          <TextInput style={styles.marginTop}
            label="Password"
            secureTextEntry={this.state.visible}
            right={<TextInput.Icon name="eye" onPress={() => {
              this.setState({
                visible: !this.state.visible
              })
            }}/>}
            onChangeText={(text) => {
              this.setState({
                password: text
              })
            }}
          />
          <Button style={styles.marginTop}  mode="contained" onPress ={() => {this.login()}}>
            Login
          </Button>
        
        </View>
    </ImageBackground>
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1
  },
  logo: {
    marginTop: 90,
    width: "90%",
    height: "55%"
  },
  containerTextfield: {
    padding: 10,
  },
  centerObjects: {
    alignItems: "center",
    marginBottom: -150,
  },
  marginTop: {
    marginTop: 10
  }
});
export default Login;