import React from "react";
import {View, TouchableOpacity,Text} from 'react-native';

export default function Button(props){
  const {styles}=props
  return <View style={[styles.buttonGroup]}>
  <TouchableOpacity style={[styles.button, styles.sendBtn]}><Text style={[styles.text, styles.white, styles.buttonText]}>Send money</Text></TouchableOpacity>
  <TouchableOpacity style={[styles.button, styles.dontSendBtn]}><Text style={[styles.accent,styles.text, styles.buttonText]}>Don't send</Text></TouchableOpacity>
  </View>
}