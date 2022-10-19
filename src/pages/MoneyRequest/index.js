import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { accent, primary } from "../../styles/colors";
import layout from "../../styles/layout";
import { Vector36, Group31, Back } from 'svg';
import typography from "../../styles/typography";
import { white } from "../../styles/colors";
const { width } = Dimensions.get("window");
export default class MoneyRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.navigateBack = this.navigateBack.bind(this);
  }
  navigateBack() {
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={[layout.safeArea, styles.backgroundStyle]}>
          <View style={[styles.headerText]}>
          <Text style={styles.header}>New Request</Text>
          <TouchableOpacity onPress={()=>this.navigateBack()}><Back style={styles.back}/></TouchableOpacity>
          </View>
          <View style={[styles.bgVector]}>
            <Vector36/>
          </View>
          <View style={[styles.profilePicture]}>
            <Group31/>
          </View>
          <Text style={[styles.name, styles.text, styles.white]}>
            Adeleke Ramon
          </Text>
          <Text style={[styles.message, styles.text, styles.white]}>
            is requesting for
          </Text>
          <Text style={[typography.display4, styles.textBal]}>
            ₦ 200,000
          </Text>
          <View style={[styles.buttonGroup]}>
          <TouchableOpacity style={[styles.button, styles.sendBtn]}><Text style={[styles.text, styles.white, styles.buttonText]}>Send money</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.dontSendBtn]}><Text style={[styles.accent,styles.text, styles.buttonText]}>Don't send</Text></TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    top:30,
    left:150
  },
  back:{
    position:'relative',
    top:35,
    left:20
  },
  backgroundStyle: {
    width: "100%",
    height: "100%",
    backgroundColor:primary
  },
  bgVector:{
    top:-80,
    left:-130,
    zIndex:1
  },
  profilePicture:{
    position: 'absolute',
    width: 200,
    height: 200,
    left: 100,
    top: 174,
    zIndex:2
  },
  accent:{
    color:accent
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
  name:{
  position: 'absolute',
  width: 176,
  height: 32,
  left:115,
  top: 398,
  fontWeight: '550',
  fontSize: 24,
  lineHeight: 32,
  },
  message:{
  position: 'absolute',
  width: 105,
  height: 21,
  left: 150,
  top: 454,
  fontWeight:'400',
  fontSize:14,
  lineHeight:21
  },
  textBal:{
    top:60,
    left:100,
    fontWeight:'900',
    color:white
  },
  buttonGroup:{
    position: 'absolute',
    alignItems: 'center',
    padding: 16,
    gap: 10,
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    width: 173,
    height: 60,
    left: 101,
    top: 595,
  },
  sendBtn:{
    backgroundColor: '#FF2E63',
    borderRadius: 10,
  },
  dontSendBtn:{
    marginTop:30,
    borderWidth:2,
    borderColor:'#464E8A',
    borderRadius: 10,
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