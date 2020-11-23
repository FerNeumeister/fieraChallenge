import {View, Alert} from "react-native";
import React, {useState} from "react";
import {sum, rest, divide, multiplication} from "./helpers/Operations";
import PadButton from "./components/PadButton";
import Display from "./components/Display";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState<(n1, n2) => {} | undefined>();

  const clean = () => {
    setFirstNumber(0);
    setSecondNumber(0);
    setOperation(undefined);
  }

  const handleOperation = (operation) => {
    if (secondNumber !== 0) {
      equal();
    }
    if (firstNumber !== 0) {
      setOperation(() => operation)
    }
  }

  const handleCount = (value) => {
    let setNumber = operation !== undefined ? setSecondNumber : setFirstNumber;
    setNumber(parseInt(`${operation !== undefined ? secondNumber : firstNumber}${value}`))
  }

  const equal = () => {
    try {
      if (operation) {
        let result = operation(firstNumber, secondNumber);
        clean();
        setFirstNumber(result);
      }
    } catch (e) {
      Alert.alert(
        "Error",
        e,
        [
          {text: "OK"}
        ],
        {cancelable: true}
      );
    }
    return;
  }

  return (
    <View>
      <Display displayNumber={operation !== undefined && secondNumber !== 0 ? secondNumber : firstNumber}/>
      <View style={styles.rowStyle}>
        <PadButton displayValue={'C'} largeButton={true} isOperation={false} handleClick={() => clean()}/>
        <PadButton displayValue={'%'} largeButton={false} isOperation={true}
                   handleClick={() => handleOperation(divide)}/>
      </View>
      <View style={styles.rowStyle}>
        {
          ['7', '8', '9'].map((element, key) => {
            return (
              <PadButton key={key} displayValue={element} largeButton={false} isOperation={false}
                         handleClick={() => handleCount(element)}/>
            )
          })
        }
        <PadButton displayValue={'X'} largeButton={false} isOperation={true}
                   handleClick={() => handleOperation(multiplication)}/>
      </View>
      <View style={styles.rowStyle}>
        {
          ['4', '5', '6'].map((element, key) => {
            return (
              <PadButton key={key} displayValue={element} largeButton={false} isOperation={false}
                         handleClick={() => handleCount(element)}/>
            )
          })
        }
        <PadButton displayValue={'-'} largeButton={false} isOperation={true}
                   handleClick={() => handleOperation(rest)}/>
      </View>
      <View style={styles.rowStyle}>
        {
          ['1', '2', '3'].map((element, key) => {
            return (
              <PadButton key={key} displayValue={element} largeButton={false} isOperation={false}
                         handleClick={() => handleCount(element)}/>
            )
          })
        }
        <PadButton displayValue={'+'} largeButton={false} isOperation={true}
                   handleClick={() => handleOperation(sum)}/>
      </View>
      <View style={styles.rowStyle}>
        <PadButton displayValue={'0'} largeButton={true} isOperation={false} handleClick={() => handleCount(0)}/>
        <PadButton displayValue={'='} largeButton={false} isOperation={true}
                   handleClick={() => equal()}/>
      </View>
    </View>
  );
}

const styles = {
  rowStyle: {
    flexDirection: 'row',
    height: '16.6%'
  }
}

export default Calculator;