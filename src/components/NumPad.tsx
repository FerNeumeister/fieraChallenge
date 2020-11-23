import {Button, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";


const PadButton = ({text, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} style={{backgroundColor: '#dbdbdb', width: 30, height: 30}}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}


const NumPad = ({count, setCount}) => {

  const handlePress = (text) => {
    setCount(text);
  }

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <PadButton text={'7'} onClick={handlePress('7')}/>
        <PadButton text={'8'}/>
        <PadButton text={'9'}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <PadButton text={'4'}/>
        <PadButton text={'5'}/>
        <PadButton text={'6'}/>
        <Button title={'4'} onPress={() => {
          setCount(`${count}4`);
          console.log('press 4')
        }}/>
        <Button title={'5'} onPress={() => {
          setCount(`${count}5`);
          console.log('press 5')
        }}/>
        <Button title={'6'} onPress={() => {
          setCount(`${count}6`);
          console.log('press 6')
        }}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title={'1'} onPress={() => {
          console.log('press 1')
        }}/>
        <Button title={'2'} onPress={() => {
          console.log('press 2')
        }}/>
        <Button title={'3'} onPress={() => {
          console.log('press 3')
        }}/>
      </View>
      <View>
        <Button title={'0'} onPress={() => {
          console.log('press 0')
        }}/>
      </View>
    </View>
  )
}
export default NumPad;