import React from "react";
import { View } from "react-native";
import {Group31} from 'svg';
export default function ProfilePicture(props){
  const {styles}=props
  return <View style={[styles.profilePicture]}>
  <Group31/>
</View>
}