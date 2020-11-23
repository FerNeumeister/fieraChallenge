import {Text, View} from "react-native";
import React from "react";

const Display = ({displayNumber}) => {
  return (
    <View style={{backgroundColor: 'black', height: '17%'}}>
      <Text style={{color: 'white', textAlign: 'right', fontSize: 50}}>{displayNumber}</Text>
    </View>
  )
}

export default Display;