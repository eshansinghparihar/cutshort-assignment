import { accent, primary } from "../../styles/colors";
import { StyleSheet } from "react-native";
import { white } from "../../styles/colors";
export default styles = StyleSheet.create({
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
    top:40,
    left:95,
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