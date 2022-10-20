import { Dimensions,  StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("window");
import { accent, primary, white } from "../../styles/colors";
export default styles = StyleSheet.create({
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