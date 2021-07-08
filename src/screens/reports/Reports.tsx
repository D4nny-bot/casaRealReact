import React, { Component } from "react";
import {View, StyleSheet,ImageBackground,TouchableOpacity} from "react-native"; 
import {Button,Avatar} from "react-native-paper";


class Reports extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (  
      <ImageBackground style={styles.body} source={require("../../../assets/img/FONDOREALCASA.png")}>
          <View style={styles.ViewL}>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate("ClienteCaptado")}}>  
                    <Avatar.Image style={styles.image} size={150} source={require('../../../assets/img/clientcapture.png')} />
                      <Button mode="contained"  >
                       CLIENT CAPTADO
                      </Button>
                  </TouchableOpacity> 
                </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("ClientePotencial")}}>
                  <Avatar.Image style={styles.image} size={150} source={require('../../../assets/img/clientpotencial.jpg')} />
                    <Button mode="contained" >
                      CLI. POTENCIAL
                    </Button>
                  </TouchableOpacity>
              </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("ProductsVents")}}>
                <Avatar.Image style={styles.image} size={150} source={require('../../../assets/img/venta.jpg')} />
                <Button mode="contained" >
                PROD. VENDIDOS
                </Button>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ViewR}> 
            <View style={styles.button}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("PedidosAcomodados")}}>
              <Avatar.Image style={styles.image} size={150} source={require('../../../assets/img/pedidos.jpg')} />
              <Button mode="contained" >
                PEDIDOS ACOM. 
              </Button>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Negociaciones")}}>
                <Avatar.Image style={styles.image} size={150} source={require('../../../assets/img/negociaciones.jpg')} />
                <Button mode="contained" >
                 NEGOCIACIONES
                </Button>
                </TouchableOpacity>
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