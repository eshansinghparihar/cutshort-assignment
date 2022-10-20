import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import typography from "../../styles/typography";
export default function Controls(props){
  const {styles, navigation}=props
  function navigateToRequestMoney() {
    navigation.navigate("MoneyRequest");
  }
  function navigateToSearchRecipient() {
    navigation.navigate("SearchRecipient");
  }
  return(<View style={[styles.controls]}>
    <Text style={[typography.subheading, styles.textMsg]}>
      Your current balance is
    </Text>
    <Text style={[typography.display4, styles.textBal]}>
      ₦ 200,000
    </Text>
    <View style={[styles.buttonGroup]}>
    <TouchableOpacity style={[styles.button]} onPress={navigateToRequestMoney}><Text style={[typography.title, styles.accent]}>Request money</Text></TouchableOpacity>
    <TouchableOpacity style={[styles.button]} onPress={navigateToSearchRecipient}><Text style={[typography.title, styles.accent]}>Send money</Text></TouchableOpacity>
    </View>
    </View>)
}