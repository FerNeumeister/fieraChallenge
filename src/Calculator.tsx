import {Button, Text, View} from "react-native";
import React from "react";

export default function Calculator() {
  return (
    <View>
      <View>
        <View style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white', textAlign: 'right'}}>123</Text>
        </View>
        <View>
          <View>
            <Button title={'C'} onPress={() => {
              console.log('press C')
            }}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title={'7'} onPress={() => {
              console.log('press 7')
            }}/>
            <Button title={'8'} onPress={() => {
              console.log('press 8')
            }}/>
            <Button title={'9'} onPress={() => {
              console.log('press 9')
            }}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title={'4'} onPress={() => {
              console.log('press 4')
            }}/>
            <Button title={'5'} onPress={() => {
              console.log('press 5')
            }}/>
            <Button title={'6'} onPress={() => {
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
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Button title={'%'} onPress={() => {
          console.log('press %')
        }}/>
        <Button title={'x'} onPress={() => {
          console.log('press x')
        }}/>
        <Button title={'-'} onPress={() => {
          console.log('press -')
        }}/>
        <Button title={'+'} onPress={() => {
          console.log('press +')
        }}/>
      </View>
    </View>
  );
}