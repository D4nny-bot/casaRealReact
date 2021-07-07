import React, { Component } from "react";
import {View, Text, StyleSheet,ImageBackground} from "react-native"; 
import {Button,Avatar,Surface} from "react-native-paper";
class Reports extends Component {
  render() {
    return (
      <ImageBackground style={styles.body} source={require("../../assets/img/FONDOREALCASA.png")}>
      <View>
        <View style={styles.ViewL}>
            <View style={styles.button}>
              <Avatar.Image style={styles.image} size={150} source={require('../../assets/img/clientecaptado.jpg')} />
                <Button mode="contained" onPress={() => console.log('Pressed1')}>
                 CLIENT CAPTURE
                </Button>
            </View>
            <View style={styles.button}>
              <Avatar.Image style={styles.image} size={150} source={require('../../assets/img/clientecaptado.jpg')} />
              <Button mode="contained" onPress={() => console.log('Pressed3')}>
               CLIENT CAPTURE
              </Button>
            </View>
            <View style={styles.button}>
              <Avatar.Image style={styles.image} size={150} source={require('../../assets/img/clientecaptado.jpg')} />
              <Button mode="contained" onPress={() => console.log('Pressed5')}>
               CLI. CAPTURADOS
              </Button>
            </View>
        </View>
        <View style={styles.ViewR}> 
            <View style={styles.button}>
              <Avatar.Image style={styles.image} size={150} source={require('../../assets/img/clientecaptado.jpg')} />
              <Button mode="contained" onPress={() => console.log('Pressed2')}>
                PED. ACOMODADOS
              </Button>
            </View>
            <View style={styles.button}>
              <Avatar.Image style={styles.image} size={150} source={require('../../assets/img/clientecaptado.jpg')} />
              <Button mode="contained" onPress={() => console.log('Pressed4')}>
               CLIENT CAPTURE
              </Button>
            </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  ViewL: {
    marginRight:200,
    marginTop: 10,
    marginLeft: 20,
  },
  ViewR: {
    marginLeft:210,
    marginTop: -621.8,
    marginRight: 20,
  },
  button:{
    marginTop: 20
  },
  image:{
    marginLeft:5
  },
  body: {
    flex:1
  },
});

export default Reports;