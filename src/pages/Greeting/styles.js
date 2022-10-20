import { StyleSheet } from "react-native";
import { primary , secondary, white} from "../../styles/colors";
export default styles = StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%",
    backgroundColor:primary
  },
  container:{
    flex:1,
    alignItems:"center"
  },
  row:{
    flexDirection:"row"
  },
  depth:{
    position:'relative',
    zIndex:1
  },
  middle:{
    alignItems:'center',
    justifyContent:'center',
    bottom:80
  },
  shallow:{
    position:'absolute',
    zIndex:5
  },
  shallower:{
    top:78,
    position:'absolute',
    zIndex:7,
    right:82
  },
  polygon:{
    top:28
  },
  top:{
    top:0
  },
  right:{
    right:0
  },
  topRight:{
    bottom:5,
    right:180,
    position:'relative',
    zIndex:3
  },
  topLeft:{
    top:-10,
    right:-150,
    position:'absolute',
    zIndex:2
  },
  topRibbon:{
    top:50,
    position:'absolute'
  },
  bottomRibbon:{
    bottom:240,
    position:'absolute',
    zIndex:-1
  },
  triangle:{
    top:40,
    right:-110,
    position:'absolute',
    zIndex:3
  },
  outerCircle:{
    top:140,
    position:'absolute',
  },
  innerCircle:{
      top:170,
      right:80,
      position:'absolute',
  },
  paper:{
    height:"35%",
    width:'80%',
    top:40,
    right:40,
    backgroundColor:secondary,
    borderTopRightRadius:50,
    color:white,
  },
  slider:{
    top:10,
    left:-50,
    marginBottom:0
  },
  text:{
    top:10,
    left:20,
    color:white,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  button:{
    top:30,
    left:20,
    borderRadius:15,
    height:"20%",
    width:"50%",
    color:secondary,
    backgroundColor:white
  },
  textButton:{
    color:secondary,
    top:10,
    left:30
  }
});