import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import {Rectangle264, ProfilePic} from 'svg';
export default function ScrollContainer(props){
  const {styles}=props
  function profilePic(){
    return <View style={[styles.profilepic]}>
    <ProfilePic/>
  </View>
  }
  function profileName(){
    return <Text style={[styles.name, styles.profileName]}>
    Adeleke Adeyanju
  </Text>
  }
  function contactInfo(){
    return <Text style={[styles.name, styles.number]}>
    (+234) 905 1694 275
  </Text>
  }
  function button(){
    return <TouchableOpacity style={[styles.button, styles.continue]}><Text style={[styles.text, styles.white, styles.buttonText]}>Continue</Text></TouchableOpacity>
  }
  return <View style={[styles.container]}>
  <View style={styles.sliderButton}>
     <Rectangle264/>
   </View>
   {profilePic()}
   {profileName()}
   {contactInfo()}
   {button()}
  </View>
}