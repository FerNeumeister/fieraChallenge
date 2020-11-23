import {Button, Text, View} from "react-native";
import React, {useState} from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(10);
  const [secondNumber, setSecondNumber] = useState(5);
  const [operation, setOperation] = useState((n1: number, n2: number) => {
  });
  const [operationSave, setOperationSave] = useState(false);

  const sum = (n1: number, n2: number) => {
    return n1 + n2;
  }
  const rest = (n1: number, n2: number) => {
    return n1 - n2;
  }
  const divide = (n1: number, n2: number) => {
    return n1 / n2;
  }
  const multiplication = (n1: number, n2: number) => {
    return n1 * n2;
  }

  const handleOperation = async (operation) => {
    setOperationSave(true);
    setOperation(() => operation)
  }

  const handleCount = async (value) => {
    console.log('op saved', operationSave);
    let count22 = operationSave ? setSecondNumber : setFirstNumber;
    count22(parseInt(`${operationSave ? secondNumber : firstNumber}${value}`))
  }

  const equal = async () => {
    let result = operation(firstNumber, secondNumber);
    console.log('---', firstNumber)
    console.log('---', secondNumber)
    console.log('result', result)
    setFirstNumber(result);
    setSecondNumber(0);
    setOperationSave(false);
    setOperation(() => {});
    return;
  }

  let count22 = operationSave ? secondNumber : firstNumber;

  return (
    <View>
      <View>
        <View style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white', textAlign: 'right'}}>{count22}</Text>
        </View>
        <View>
          <View>
            <Button title={'C'} onPress={() => {
              setFirstNumber(0);
              setSecondNumber(0);
              setOperationSave(false);
            }}/>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title={'7'} onPress={() => {
              handleCount('7')
            }}/>
            <Button title={'8'} onPress={() => {
              handleCount('8')
            }}/>
            <Button title={'9'} onPress={() => {
              handleCount('9')
            }}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title={'4'} onPress={() => {
              handleCount('4')
            }}/>
            <Button title={'5'} onPress={() => {
              handleCount('5')
            }}/>
            <Button title={'6'} onPress={() => {
              handleCount('6')
            }}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title={'1'} onPress={() => {
              handleCount('1')
            }}/>
            <Button title={'2'} onPress={() => {
              handleCount('2')
            }}/>
            <Button title={'3'} onPress={() => {
              handleCount('3')
            }}/>
          </View>
          <View>
            <Button title={'0'} onPress={() => {
              handleCount('0')
            }}/>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Button title={'%'} onPress={() => {
          handleOperation(divide);
        }}/>
        <Button title={'x'} onPress={() => {
          handleOperation(multiplication);
        }}/>
        <Button title={'-'} onPress={() => {
          handleOperation(rest);
        }}/>
        <Button title={'+'} onPress={() => {
          handleOperation(sum);
        }}/>
        <Button title={'='} onPress={() => {
          equal();
        }}/>
      </View>
    </View>
  );
}

export default Calculator;