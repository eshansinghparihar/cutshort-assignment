import React from "react";
import {
  View,
  Text
} from "react-native";
import layout from "../../styles/layout";
import typography from "../../styles/typography";
import styles from "./styles";
import HeaderMoneyRequest from "../../components/MoneyRequest/HeaderMoneyRequest";
import ProfilePicture from "../../components/MoneyRequest/ProfilePicture";
import Button from '../../components/MoneyRequest/Button';
import { Vector36 } from 'svg';
export default function MoneyRequest(props){
  function backGroundDesign(){
    return <View style={[styles.bgVector]}>
    <Vector36/>
    </View>
  }
    return (
      <View style={[layout.safeArea, styles.backgroundStyle]}>
        <HeaderMoneyRequest styles={styles} navigation={props.navigation}/>
        {backGroundDesign()}
        <ProfilePicture styles={styles}/>
        <Text style={[styles.name, styles.text, styles.white]}>
        Adeleke Ramon
        </Text>
        <Text style={[styles.message, styles.text, styles.white]}>
        is requesting for
        </Text>
        <Text style={[typography.display4, styles.textBal]}>
        ₦ 200,000
        </Text>
        <Button styles={styles}/>
      </View>
    );
  }