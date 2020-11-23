import {Text, TouchableOpacity, View} from "react-native";
import React from "react";

const PadButton = ({largeButton, isOperation, handleClick, displayValue}) => {
  return (
    <View style={{width: largeButton ? '75%' : '25%', backgroundColor: isOperation ? 'orange' : '#c7c7c7'}}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={{fontSize: 45, textAlign: 'center', color: isOperation ? 'white' : 'black'}}>
          {displayValue}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default PadButton;