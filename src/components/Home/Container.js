import React from "react";
import {Rectangle264,Group37,Group40,Group41,Group42} from 'svg';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import typography from '../../styles/typography';
export default function Container(props){
  const {styles}=props
  function displayAllTransaction(){
    const transaction=[<Group37/>, <Group40/>, <Group41/>, <Group42/>]
    const list=[]
    for(i=0;i<transaction.length;i++)
    {
      const element=(i%2)?<TouchableOpacity key={i}><View style={[styles.element, styles.odd]}>{transaction[i]}</View></TouchableOpacity>:<TouchableOpacity key={i}><View style={[styles.element, styles.even]}>{transaction[i]}</View></TouchableOpacity>
      list.push(element)
    }
    return list
  }
  return <View style={[styles.listContainer]}>
  <View style={styles.sliderButton}>
    <Rectangle264/>
  </View>
  <Text style={[typography.body, styles.headingSlider]}>All Transactions</Text>
  <ScrollView style={[styles.scroll]}>
  {displayAllTransaction()}
  </ScrollView>
  </View>
}