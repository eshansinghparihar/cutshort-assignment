import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import {Ellipse7, Ellipse8 , Lock, Polygon1, Polygon2, Polygon3, Rectangle255, Rectangle256, Rectangle257, Vector33, Vector34, Vector35, Slider} from 'svg';
import layout from "../../styles/layout";
import styles from "./styles";
import typography from "../../styles/typography";
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