import React from "react";
import { View } from "react-native";
import layout from "../../styles/layout";
import Controls from "../../components/Home/Controls";
import Header from "../../components/Home/Header";
import Container from "../../components/Home/Container";
import styles from "./styles";
export default function Home(props) {
    return (
      <View style={[layout.safeArea, styles.backgroundStyle]}>
          <Header styles={styles}/>
          <Controls styles={styles} navigation={props.navigation}/>
          <Container styles={styles}/>
      </View>
    );
}
