import React from "react";
import { View,Text } from "react-native";
import {Person1, Person2, Person3, Person4, Person5, Person6} from 'svg';
export default function People(props){
  const {styles}=props
  return <View style={[styles.peopleContainer]}>
  <View style={[ styles.person1]}>
  <Person1/>
  <Text style={[styles.name, styles.peopleName]}>
  Adedoyin Leke
  </Text>
  </View>
  <View style={[ styles.person2]}>
  <Person2/>
  <Text style={[styles.name, styles.peopleName]}>
  Adelaide Uti (son)
  </Text>
  </View>
  <View style={[ styles.person3]}>
  <Person3/>
  <Text style={[styles.name, styles.peopleName]}>
  Adolph colleague
  </Text>
  </View>
  <View style={[ styles.person4]}>
  <Person4/>
  <Text style={[styles.name, styles.peopleName]}>
  Aduni Wale
  </Text>
  </View>
  <View style={[ styles.person5]}>
  <Person5/>
  <Text style={[styles.name, styles.peopleName]}>
  Adedoyin Leke
  </Text>
  </View>
  <View style={[ styles.person6]}>
  <Person6/>
  <Text style={[styles.name, styles.peopleName1]}>
  Adeleke Adeyanju
  </Text>
  </View>
  </View>
}