import { StyleSheet,  Dimensions } from "react-native";
import { accent, primary, secondary, textButton, white } from "../../styles/colors";
const { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%",
    backgroundColor:primary,
    margin:0,
    padding:0
  },
  headerTop:{
    top:20,
    flexDirection:'row',
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