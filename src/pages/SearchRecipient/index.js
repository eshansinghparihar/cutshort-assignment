import React from "react";
import {
  View
} from "react-native";
import layout from "../../styles/layout";
import HeaderSearchRecipient from "../../components/SearchRecipient/HeaderSearchRecipient";
import People from "../../components/SearchRecipient/People";
import ScrollContainer from "../../components/SearchRecipient/ScrollContainer";
import styles from "./styles";
export default function SearchRecipient(props){

  function searchCircles(){
    return <View style={styles.circlesContainer}>
    <View style={styles.circle_1} />
    <View style={styles.circle_2} />
    <View style={styles.circle_3} />
    </View>
  }
    return (
      <View style={[layout.safeArea, styles.backgroundStyle]}>
        <HeaderSearchRecipient styles={styles} navigation={props.navigation}/>
        {searchCircles()}
        <People styles={styles}/>
        <ScrollContainer styles={styles}/>
      </View>
    );
  }