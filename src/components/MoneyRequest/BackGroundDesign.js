import React from "react";
import View from 'react-native';
import { Vector36 } from 'svg';
export default function BackGroundDesign(props){
  const {styles}=props
  return <View style={[styles.bgVector]}><Vector36/></View>
}