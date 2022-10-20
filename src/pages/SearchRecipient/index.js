import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import layout from "../../styles/layout";
const { height, width } = Dimensions.get("window");
import {Person1, Person2, Person3, Person4, Person5, Person6, Rectangle264, ProfilePic, Back} from 'svg';
import { accent, primary, white } from "../../styles/colors";
import { TextInput } from "react-native-gesture-handler";

export default function SearchRecipient(props){
  function navigateBack() {
   props.navigation.navigate("Home");
  }
  function Header(){
      return <View style={[styles.headerText]}>
        {searchBar()}
        {backButton()}
        </View>
  }
  function backButton(){
    return <TouchableOpacity onPress={()=>navigateBack()}><Back style={styles.back}/></TouchableOpacity>
  }
  function searchBar(){
    return <View ><TextInput style={[styles.buttonBorder, styles.header]}></TextInput></View>
  }
  function searchCircles(){
    return <View style={styles.circlesContainer}>
    <View style={styles.circle_1} />
    <View style={styles.circle_2} />
    <View style={styles.circle_3} />
    </View>
  }
  function people(){
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
  function scrollContainer(){
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
    return (
      <View style={[layout.safeArea, styles.backgroundStyle]}>
        {Header()}
        {searchCircles()}
        {people()}
        {scrollContainer()}
      </View>
    );
  }
const styles = StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%",
    backgroundColor:primary
  },
  buttonBorder:{
    borderWidth:2,
    borderColor:'#1DC7AC',
    width:0.70*width,
    borderRadius:15,
    padding:10
  },
  headerText:{
    display:'flex',
    flexDirection:'row',
    zIndex:3
  },
  header:{
    position: 'absolute',
    textAlignVertical:'center',
    color:'#D7C9C9',
    fontWeight:'700',
    fontSize:18,
    lineHeight:28,
    top:20,
    left:100
  },
  back:{
    position:'relative',
    top:35,
    left:20
  },
  peopleContainer:{
    position:'absolute'
  },
  people:{
    // position:'relative'
  },
  person1:{
    top:118,
    left:189,
    width:36,
    height:36
  },
  person2:{
    top:121,
    left:77,
    width:36,
    height:36
  },
  person3:{
    top:280,
    left:90,
    width:36,
    height:36
  },
  person4:{
    top:320,
    left:189,
    width:36,
    height:36
  },
  person5:{
    top:240,
    left:300,
    width:36,
    height:36
  },
  person6:{
    top:50,
    left:300,
    width:72,
    height:72
  },
  circlesContainer:{
      top:60,
      width: width,
      height: width,
      alignItems: 'center',
  },
  circle_1:{
      top:0,
      position: 'absolute',
      width:width,
      height:width,
      borderRadius: width/2,
      backgroundColor: primary,
      borderWidth:2,
      borderColor:accent
  },
  circle_2:{
      top:width*0.1, // The amount remaining
      left:width*0.1,
      position: 'absolute',
      width:width*0.8, // 80% of the base size
      height:width*0.8,
      borderRadius: width/2,
      backgroundColor: primary,
      borderWidth:2,
      borderColor:accent
  },
  circle_3:{
      top:width*0.2,
      left:width*0.2,
      position: 'absolute',
      width:width*0.6,
      height:width*0.6, // 60% of the base size
      borderRadius: width*0.6/2,
      backgroundColor: primary,
      borderWidth:2,
      borderColor:accent
  },
  container:{
    position: 'absolute',
    height: 0.4*height,
    left: 0,
    top:0.62*height,
    width:width,
    backgroundColor:accent,
    borderRadius:50,
  },
  sliderButton:{
    justifyContent:'center',
    alignItems:'center',
    top:20
  },
  profilepic:{
    top:60,
    marginRight:'auto',
    marginLeft:'auto'
  },
  name:{
  color:white,
  position: 'absolute',

  fontWeight: '550',
/* identical to box height */

  display: 'flex',
  alignItems: 'center',
  textAlign: 'center'
  },
  profileName:{
  fontSize: 20,
  lineHeight: 20,
  top:160,
  left:120
  },
  peopleName:{
  fontSize: 12,
  lineHeight: 18,
  width:120,
  top:40,
  left:-40
  },
  peopleName1:{
    fontSize: 12,
    lineHeight: 18,
    width:120,
    top:80,
    left:-20,
    color:'#1DC76B'
    },
  number:{
  fontSize: 14,
  lineHeight: 21,
  top:180,
  left:130
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    width: 173,
    height: 60,
    top: 140,
    marginLeft:'auto',
    marginRight:'auto'
  },
  continue:{
    backgroundColor: '#FF2E63',
    borderRadius: 10,
  },
  white:{
    color: '#EEEEEE',
  },
  text:{
    fontFamily: 'HelveticaNeueCyr',
    fontStyle: 'normal',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonText:{
    textAlignVertical:'center',
    marginLeft:'auto',
    marginRight:'auto',
    fontSize:16,
    lineHeight:28,
    fontWeight:'900'
  }
});