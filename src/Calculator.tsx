import {View, Alert} from "react-native";
import React, {useState} from "react";
import {sum, rest, divide, multiplication} from "./helpers/Operations";
import PadButton from "./components/PadButton";
import Display from "./components/Display";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState<(n1, n2) => {} | undefined>();
  const [operationSave, setOperationSave] = useState(false);

  const clean = () => {
    setFirstNumber(0);
    setSecondNumber(0);
    setOperationSave(false);
    setOperation(undefined);
  }

  const handleOperation = (operation) => {
    if (firstNumber !== 0) {
      setOperationSave(true);
      setOperation(() => operation)
    }
  }

  const handleCount = (value) => {
    let setNumber = operationSave ? setSecondNumber : setFirstNumber;
    setNumber(parseInt(`${operationSave ? secondNumber : firstNumber}${value}`))
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
      console.log(e);
    }
    return;
  }

  return (
    <View>
      <Display displayNumber={operationSave && secondNumber !== 0 ? secondNumber : firstNumber}/>
      <View style={styles.rowStyle}>
        <PadButton displayValue={'C'} largeButton={true} isOperation={false} handleClick={() => clean()}/>
        <PadButton displayValue={'%'} largeButton={false} isOperation={true}
                   handleClick={() => handleOperation(divide)}/>
      </View>
      <View style={styles.rowStyle}>
        <PadButton displayValue={'7'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(7)}/>
        <PadButton displayValue={'8'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(8)}/>
        <PadButton displayValue={'9'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(9)}/>
        <PadButton displayValue={'X'} largeButton={false} isOperation={true}
                   handleClick={() => handleOperation(multiplication)}/>
      </View>
      <View style={styles.rowStyle}>
        <PadButton displayValue={'4'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(4)}/>
        <PadButton displayValue={'5'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(5)}/>
        <PadButton displayValue={'6'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(6)}/>
        <PadButton displayValue={'-'} largeButton={false} isOperation={true}
                   handleClick={() => handleOperation(rest)}/>
      </View>
      <View style={styles.rowStyle}>
        <PadButton displayValue={'1'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(1)}/>
        <PadButton displayValue={'2'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(2)}/>
        <PadButton displayValue={'3'} largeButton={false} isOperation={false}
                   handleClick={() => handleCount(3)}/>
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