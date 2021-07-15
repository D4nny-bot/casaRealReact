import React, { Component } from "react";
import {View, Text, StyleSheet, Alert, FlatList} from "react-native";
import AppContext from "../../../context/AppContext";
import {IReunion, ItemClient} from "../clientsRegular/ClientsRegular"
import { Avatar, Button, Card, Title, Paragraph , Chip, Searchbar, List} from 'react-native-paper';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";
import {Types} from "../../../context/ContantTypes"; 
class DetailsCientsR extends Component {
    render() {
      return (
          <View>
              <Text>
                  Detalles
              </Text>
          </View>
      )
    }
  }
  export default DetailsCientsR;