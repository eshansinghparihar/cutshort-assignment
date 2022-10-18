import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {Ellipse7, Ellipse8 , Lock, Polygon1, Polygon2, Polygon3, Rectangle255, Rectangle256, Rectangle257, Vector33, Vector34, Vector35, Slider} from 'svg';
import { primary , secondary, white} from "../../styles/colors";
import layout from "../../styles/layout";
import typography from "../../styles/typography";
const { width } = Dimensions.get("window");
export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.navigateToDashboard = this.navigateToHome.bind(this);
  }
  navigateToHome() {
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={[styles.container,layout.safeArea, styles.backgroundStyle]}>
          <View style={[styles.top]}>
          <View style={[styles.topRight]}>
          <Vector34/>
          <View style={styles.outerCircle}>
          <Rectangle256/>
          </View >
          <View style={styles.innerCircle}>
          <Rectangle255 width={84} height={80}/>
          </View>
          </View>
          <View style={[styles.topLeft]}>
          <Rectangle257/>
          </View>
          <View style={[styles.triangle]}>
            <Polygon1/>
          </View>
          </View>
          <View style={[styles.depth, styles.topRibbon]}>
            <Vector33/>
          </View>
          <View style={[styles.row, styles.middle]}>
              <View style={[styles.depth]}>
                <Ellipse8 height={214} width={107}/>
                <View style={[styles.shallow, styles.polygon, styles.right]}>
                <Polygon2 height={165} width={82}/>
                </View>
              </View>
              <View style={styles.shallower}><Lock/></View>
              <View style={[styles.depth]}>
                <Ellipse7 height={214} width={107}/>
                <View style={[styles.shallow, styles.polygon]}>
                <Polygon3 height={165} width={82}/>
                </View>
              </View>
          </View>
          <View style={[styles.depth, styles.bottomRibbon]}>
            <Vector35/>
          </View>
          <View style={[styles.paper]}>
          <View style={[styles.slider]}>
            <Slider height={30} width={200}/>
          </View>
          <Text style={[typography.headline, styles.text]}>Transfer That Is Safe</Text>
          <Text style={[typography.subheading, styles.text]}>You have nothing to be scared</Text>
          <Text style={[typography.subheading , styles.text]}>about, we got you covered</Text>
          <TouchableOpacity style={[styles.button]} onPress={()=>this.navigateToHome()}><Text style={[typography.title , styles.textButton]}>Start Banking</Text></TouchableOpacity>
          </View>
          
      </View>    );
  }
}
const styles = StyleSheet.create({
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