import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import typography from '../../styles/typography';
import { Group11 } from 'svg';
export default function Header(props) {
  const {styles}=props
  return <View style={[styles.headerTop]}>
    <View style={[styles.bread]}>
      <TouchableOpacity><Group11 /></TouchableOpacity>
    </View>
    <Text style={[typography.headline, styles.text]}>Hello Sandra,</Text>
    <View style={[styles.topLeft]}>
      <TouchableOpacity style={[styles.addMoneyBtn]}><Text style={[styles.btnText, styles.textButton]}>Add money</Text></TouchableOpacity>
    </View>
  </View>;
}