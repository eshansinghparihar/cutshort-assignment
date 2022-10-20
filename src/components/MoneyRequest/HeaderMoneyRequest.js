import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {Back} from 'svg';
export default function HeaderMoneyRequest(props){
  const {styles,navigation}= props
  function navigateBack() {
    navigation.navigate("Home");
  }
  return (<View style={[styles.headerText]}>
  <Text style={styles.header}>New Request</Text>
  <TouchableOpacity onPress={()=>navigateBack()}><Back style={styles.back}/></TouchableOpacity>
  </View>)
}