import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";
import layout from "../../styles/layout";
import { accent, primary, secondary, textButton, white } from "../../styles/colors";
import { Group11, Group37, Group40, Group41, Group42 ,Rectangle264} from 'svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import typography from '../../styles/typography'
const { width, height } = Dimensions.get("window");
export default function Home(props) {
  function navigateToRequestMoney() {
    props.navigation.navigate("MoneyRequest");
  }
  function navigateToSearchRecipient() {
    props.navigation.navigate("SearchRecipient");
  }
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
    function Header() {
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
    function Controls(){
      console.log()
      return(<View style={[styles.controls]}>
        <Text style={[typography.subheading, styles.textMsg]}>
          Your current balance is
        </Text>
        <Text style={[typography.display4, styles.textBal]}>
          ₦ 200,000
        </Text>
        <View style={[styles.buttonGroup]}>
        <TouchableOpacity style={[styles.button]} onPress={()=>navigateToRequestMoney()}><Text style={[typography.title, styles.accent]}>Request money</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={()=>navigateToSearchRecipient()}><Text style={[typography.title, styles.accent]}>Send money</Text></TouchableOpacity>
        </View>
        </View>)
    }
    function Container(){
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

    return (
      <View style={[layout.safeArea, styles.backgroundStyle]}>
          {Header()}
          {Controls()}
          {Container()}
      </View>
    );

    
}
const styles = StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%",
    backgroundColor:primary
  },
  headerTop:{
    top:20,
    flexDirection:'row'
  },
  bread:{
    left:20,
  },
  text:{
    color:white,
    top:10,
    left:40
  },
  topLeft:{
    top:10,
    left:120,
    padding:2
  },
  addMoneyBtn:{
    height:40,
    width:100,
    backgroundColor:accent,
    borderRadius:10
  },
  btnText:{
    top:10,
    alignItems:'center',
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight:'bold'
  },
  accent:{
    color:accent
  },
  textButton:{
    color:textButton
  },
  controls:{
    flexDirection:'column'
  },
  textMsg:{
    color:white,
    fontWeight:'100',
    top:80,
    left:20
  },
  textBal:{
    top:40,
    left:20,
    fontWeight:'900',
    color:white
  },
  buttonGroup:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    marginTop:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button:{
    color:secondary,
    height:60,
    width:180,
    borderColor:accent,
    borderWidth: 2,
    borderRadius:15,
    color:textButton,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  listContainer: {
    position: 'absolute',
    height: 0.55*height,
    left: 0,
    top:0.45*height,
    width:width,
    backgroundColor:accent,
    borderRadius:50
  },
  scroll:{
    marginTop:60
  },
  element:{
    padding:20
  },
  even:{
    backgroundColor:accent
  },
  odd:{
    backgroundColor:primary
  },
  headingSlider:{
    color:white,
    fontWeight:'900',
    fontSize:18,
    top:30,
    left:20
  },
  sliderButton:{
    justifyContent:'center',
    alignItems:'center',
    top:20
  }
});