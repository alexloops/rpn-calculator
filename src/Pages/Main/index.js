import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Vibration } from "react-native";

var Finance = require("tvm-financejs");

import {
  CalculatorContainer,
  ConfigHeader,
  DisplayContainer,
  ButtonsContainer,
  SecondaryButtonsContainer,
  ConfigSymbol,
} from "./style";

import { Ionicons } from "@expo/vector-icons";

import DisplayPanel from "../../Components/DisplayPanel";
import ButtonsPanel from "../../Components/ButtonsPanel";
import SecondaryButtonsPanel from "../../Components/SecondaryButtonsPanel";
import DeltaDayModal from "../../Components/Modals/DeltaDay";

export default function Main({ navigation }) {
  //
  //Declaring
  //Our States
  const [display, setDisplay] = useState(["0", "0", "0", "0", "0"]); //Array of numbers to be shown on display
  const [isCurrentNumberReady, setCurrentNumberReady] = useState(true);
  const [financialVars, setFinancialVars] = useState({
    n: "",
    i: "",
    PV: "",
    PMT: "",
    FV: "",
  });
  const [lastDisplay, setLastDisplay] = useState(display); // this will be user in the financial calculations
  //
  //States of modals
  // ---- DeltaDay
  const [deltaDayVisible, setDeltaDayVisible] = useState(false);
  const isVibrationOn = true;
  const vibrationTime = 60;
  //
  //Declaring
  //Our Button Functions
  //
  const manageClearPress = () => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    setDisplay(["0", "0", "0", "0", "0"]);
    setFinancialVars({
      n: "",
      i: "",
      PV: "",
      PMT: "",
      FV: "",
    });
    setCurrentNumberReady(true);
  };
  const manageDeletePress = () => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    if (isCurrentNumberReady) {
      const newNumberArray = [...display];
      newNumberArray[0] = "0";
      setDisplay(newNumberArray);
      setCurrentNumberReady(false);
    } else {
      const newNumberArray = [...display];

      if (newNumberArray[0].split("").length <= 1) {
        newNumberArray[0] = "0";
      } else {
        newNumberArray[0] = newNumberArray[0].split("");
        newNumberArray[0].pop();
        newNumberArray[0] = newNumberArray[0].join("");
      }
      setDisplay(newNumberArray);
    }
  };
  const manageNumberPress = (numberPressed) => {
    //
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    //
    if (isCurrentNumberReady) {
      const newNumberArray = [numberPressed, ...display];
      newNumberArray.pop();
      setDisplay(newNumberArray);
      setCurrentNumberReady(false);
    } else {
      let newCurrentNumber = display[0];
      newCurrentNumber = newCurrentNumber.split("");

      //if display is full, pressing number wont do anything
      if (newCurrentNumber.includes(".") && newCurrentNumber.length >= 11)
        return;
      if (!newCurrentNumber.includes(".") && newCurrentNumber.length >= 10)
        return;

      newCurrentNumber.push(numberPressed);

      // We remove the "0 to the left" if there is any
      if (newCurrentNumber[0] === "0" && newCurrentNumber[1] !== ".") {
        newCurrentNumber.shift();
      }

      newCurrentNumber = newCurrentNumber.join("");
      const newNumberArray = [...display];
      newNumberArray[0] = newCurrentNumber;
      setDisplay(newNumberArray);
      //console.log(newNumberArray);
    }
  };
  const manageEnterPress = () => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    if (isCurrentNumberReady === false) {
      setCurrentNumberReady(true);
    } else {
      const newNumberArray = [...display];
      newNumberArray.unshift(newNumberArray[0]);
      newNumberArray.pop();
      setDisplay(newNumberArray);
    }
  };
  const managePointPress = () => {
    if (isCurrentNumberReady) {
      manageNumberPress("0.");
    } else {
      if (isVibrationOn) Vibration.vibrate(vibrationTime);
      let newCurrentNumber = display[0];
      newCurrentNumber = newCurrentNumber.split("");
      if (newCurrentNumber.includes(".")) return; //If there is a point, we dont include another
      newCurrentNumber.push(".");
      newCurrentNumber = newCurrentNumber.join("");
      const newNumberArray = [...display];
      newNumberArray[0] = newCurrentNumber;
      setDisplay(newNumberArray);
    }
  };
  const manageSimpleOperationPress = (operation) => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    const newNumberArray = [...display];
    if (operation === "addition")
      newNumberArray[0] =
        parseFloat(newNumberArray[1]) + parseFloat(newNumberArray[0]);

    if (operation === "subtraction")
      newNumberArray[0] =
        parseFloat(newNumberArray[1]) - parseFloat(newNumberArray[0]);

    if (operation === "multiplication")
      newNumberArray[0] =
        parseFloat(newNumberArray[1]) * parseFloat(newNumberArray[0]);

    if (operation === "division") {
      if (newNumberArray[0] === "0") {
        newNumberArray[0] = newNumberArray[0];
      }
      newNumberArray[0] =
        parseFloat(newNumberArray[1]) / parseFloat(newNumberArray[0]);
    }
    if (operation === "power") {
      newNumberArray[0] = Math.pow(
        parseFloat(newNumberArray[1]),
        parseFloat(newNumberArray[0])
      );
    }

    newNumberArray[0] = newNumberArray[0].toString();
    newNumberArray.splice(1, 1);
    newNumberArray.push("0");
    setCurrentNumberReady(true);
    setDisplay(newNumberArray);
  };
  const manageSingleXOperationPress = (operation) => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);

    const newNumberArray = [...display];
    newNumberArray[0] = parseFloat(newNumberArray[0]);

    if (operation === "square") {
      if (newNumberArray[0] <= 0) {
        newNumberArray[0] = newNumberArray[0];
      }
      newNumberArray[0] = Math.sqrt(newNumberArray[0]);
    }

    if (operation === "invert") {
      newNumberArray[0] = 1.0 / newNumberArray[0];
    }

    if (operation === "euler") {
      newNumberArray[0] = Math.pow(2.71828182845904, newNumberArray[0]);
    }

    if (operation === "fatorial") {
      let fat = 1;
      for (var i = 2; i <= newNumberArray[0]; i++) fat = fat * i;
      newNumberArray[0] = fat;
    }

    if (operation === "ln") {
      newNumberArray[0] = Math.log(newNumberArray[0]);
    }
    newNumberArray[0] = newNumberArray[0].toString();
    newNumberArray.push("0");
    setCurrentNumberReady(true);
    setDisplay(newNumberArray);
  };
  const managePercentPress = (operation) => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    const newNumberArray = [...display];
    let newNumber = 0.0;
    if (operation === "percent") {
      newNumber =
        parseFloat(newNumberArray[0]) * parseFloat(newNumberArray[1]) * 0.01;
    }
    if (operation === "total") {
      if (parseFloat(newNumberArray[1]) == 0) return;
      newNumber =
        parseFloat(newNumberArray[0]) / parseFloat(newNumberArray[1]) / 0.01;
    }
    if (operation === "delta") {
      if (parseFloat(newNumberArray[1]) == 0) return;
      newNumber = parseFloat(newNumberArray[0]) / parseFloat(newNumberArray[1]);
      newNumber = newNumber - 1;
      newNumber = newNumber * 100;
    }
    newNumber = newNumber.toString();
    newNumberArray.unshift(newNumber);
    newNumberArray.splice(1, 1);

    setCurrentNumberReady(true);
    setDisplay(newNumberArray);
  };
  const manageCHSPress = () => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    let newNumber = display[0];
    newNumber = newNumber.split("");
    if (newNumber[0] !== "-") {
      newNumber.unshift("-");
    } else {
      newNumber.splice(0, 1);
    }
    newNumber = newNumber.join("");
    const newDisplay = [...display];
    newDisplay[0] = newNumber;

    setDisplay(newDisplay);
  };
  const manageSwapXYPress = () => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    const newDisplay = [...display];
    let aux = newDisplay[0];
    newDisplay[0] = newDisplay[1];
    newDisplay[1] = aux;
    setDisplay(newDisplay);
    setCurrentNumberReady(true);
  };
  const manageRollPress = () => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    const newDisplay = [...display];
    let first = newDisplay.shift();
    newDisplay.push(first);
    setCurrentNumberReady(true);
    setDisplay(newDisplay);
  };
  const manageFinancialPress = (keyPressed) => {
    if (isVibrationOn) Vibration.vibrate(vibrationTime);
    //
    // This function is divided in two blocks
    // The first block is for when the user is still inputting the data,
    // therefore we should just add it to the FinancialVars Object
    // The second block is for when the data is already there and now the user
    // is expecting a calculation to be made and an answer to be given
    //
    //
    // If the display array has changed, it means the user wants to add new data
    // If the display array is the same, it means the user wants a calculation

    if (lastDisplay != display) {
      setLastDisplay(display);
      let newFinancialVars = financialVars;

      newFinancialVars[keyPressed] = display[0];

      setCurrentNumberReady(true);
      setFinancialVars(newFinancialVars);
    } else {
      //
      //
      var finance = new Finance();
      let calculation = "";
      let finVar = financialVars;
      //
      //Calculating PV
      if (keyPressed == "PV") {
        //transform the optional keys in 0 if they're empty
        finVar["FV"] = finVar["FV"] == "" ? 0.0 : finVar["FV"];
        finVar["PMT"] = finVar["PMT"] == "" ? 0.0 : finVar["PMT"];

        calculation = finance.PV(
          parseFloat(finVar["i"]) / 100,
          parseFloat(finVar["n"]),
          parseFloat(finVar["PMT"]),
          parseFloat(finVar["FV"]),
          0
        );
      }
      //
      //Calculating FV
      if (keyPressed == "FV") {
        //transform the optional keys in 0 if they're empty
        finVar["PV"] = finVar["PV"] == "" ? 0.0 : finVar["PV"];
        finVar["PMT"] = finVar["PMT"] == "" ? 0.0 : finVar["PMT"];

        calculation = finance.FV(
          parseFloat(finVar["i"]) / 100,
          parseFloat(finVar["n"]),
          parseFloat(finVar["PMT"]),
          parseFloat(finVar["PV"]),
          0
        );
      }
      //
      //Calculating PMT
      if (keyPressed == "PMT") {
        //transform the optional keys in 0 if they're empty
        finVar["PV"] = finVar["PV"] == "" ? 0.0 : finVar["PV"];
        finVar["FV"] = finVar["FV"] == "" ? 0.0 : finVar["FV"];

        calculation = finance.PMT(
          parseFloat(finVar["i"]) / 100,
          parseFloat(finVar["n"]),
          parseFloat(finVar["PV"]),
          parseFloat(finVar["FV"]),
          0
        );
      }
      //
      //Calculating i
      if (keyPressed == "i") {
        //transform the optional keys in 0 if they're empty
        finVar["PV"] = finVar["PV"] == "" ? 0.0 : finVar["PV"];
        finVar["FV"] = finVar["FV"] == "" ? 0.0 : finVar["FV"];

        calculation = finance.RATE(
          parseFloat(finVar["n"]),
          parseFloat(finVar["PMT"]),
          parseFloat(finVar["PV"]),
          parseFloat(finVar["FV"]),
          0
        );
        calculation = calculation * 100;
      }
      //
      // Calculating n
      if (keyPressed == "n") {
        //transform the optional keys in 0 if they're empty
        finVar["PV"] = finVar["PV"] == "" ? 0.0 : finVar["PV"];
        finVar["FV"] = finVar["FV"] == "" ? 0.0 : finVar["FV"];
        finVar["PMT"] = finVar["PMT"] == "" ? 0.0 : finVar["PMT"];

        calculation = finance.NPER(
          parseFloat(finVar["i"]) / 100,
          parseFloat(finVar["PMT"]),
          parseFloat(finVar["PV"]),
          parseFloat(finVar["FV"]),
          0
        );
      }
      //
      //
      calculation = calculation.toString();
      const newNumberArray = [calculation, ...display];
      newNumberArray.pop();
      setDisplay(newNumberArray);
    }
  };

  //
  //Declaring
  //Our Components
  //
  return (
    <>
      <StatusBar style="light" />
      <CalculatorContainer>
        <ConfigHeader>
          <ConfigSymbol onPress={() => navigation.navigate("Preferences")}>
            <Ionicons name="md-cog" size={32} color="#ddd" />
          </ConfigSymbol>
        </ConfigHeader>
        <DisplayContainer>
          <DeltaDayModal
            visible={deltaDayVisible}
            setVisible={setDeltaDayVisible}
            display={display}
            setDisplay={setDisplay}
          />
          <DisplayPanel
            isCurrentNumberReady={isCurrentNumberReady}
            display={display}
            financialVars={financialVars}
            userDecimalPlaces={9}
          />
        </DisplayContainer>
        <SecondaryButtonsContainer>
          <SecondaryButtonsPanel
            xOnlyOperationPressFunction={manageSingleXOperationPress}
            operationPressFunction={manageSimpleOperationPress}
            percentPressFunction={managePercentPress}
            openDeltaDayModal={setDeltaDayVisible}
            financialPressFunction={manageFinancialPress}
          />
        </SecondaryButtonsContainer>
        <ButtonsContainer>
          <ButtonsPanel
            clearPressFunction={manageClearPress}
            deletePressFunction={manageDeletePress}
            numberPressFunction={manageNumberPress}
            enterPressFunction={manageEnterPress}
            pointPressFunction={managePointPress}
            operationPressFunction={manageSimpleOperationPress}
            xOnlyOperationPressFunction={manageSingleXOperationPress}
            CHSPressFunction={manageCHSPress}
            swapXYPressFunction={manageSwapXYPress}
            rollPressFunction={manageRollPress}
          />
        </ButtonsContainer>
      </CalculatorContainer>
    </>
  );
}
