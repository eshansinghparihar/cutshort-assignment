import React from "react";
import {View, TouchableOpacity} from 'react-native';
import { Back } from 'svg';
import { TextInput } from "react-native-gesture-handler";
export default function HeaderSearchRecipient(props){
  const {styles, navigation}= props
  function navigateBack() {
    navigation.navigate("Home");
   }
  function backButton(){
    return <TouchableOpacity onPress={()=>navigateBack()}><Back style={styles.back}/></TouchableOpacity>
  }
  function searchBar(){
    return <View ><TextInput style={[styles.buttonBorder, styles.header]}></TextInput></View>
  }
  return <View style={[styles.headerText]}>
    {searchBar()}
    {backButton()}
    </View>
 }