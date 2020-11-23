import {Text, TouchableOpacity} from "react-native";
import React from "react";

const PadButton = ({largeButton, isOperation, handleClick, displayValue}) => {
  return (
    <TouchableOpacity style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: largeButton ? '75%' : '25%',
      backgroundColor: isOperation ? 'orange' : '#c7c7c7'
    }}
                      onPress={handleClick}>
      <Text style={{fontSize: 45, textAlign: 'center', color: isOperation ? 'white' : 'black'}}>
        {displayValue}
      </Text>
    </TouchableOpacity>
  )
}

export default PadButton;