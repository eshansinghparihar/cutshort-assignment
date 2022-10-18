import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";
import layout from "../../styles/layout";
const { width } = Dimensions.get("window");
export default class MoneyRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.navigateToDashboard = this.navigateToDashboard.bind(this);
  }
  navigateToDashboard() {
    this.props.navigation.navigate("Dashboard");
  }
  render() {
    return (
      <View style={[layout.safeArea]}>
          <Text>Hey</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%",
  },
});