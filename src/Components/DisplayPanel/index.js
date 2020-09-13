import React, { useState } from "react";
import { Text, View } from "react-native";

import {
  DisplayPanelContainer,
  ExtraInfoContainer,
  ExtraInfoText,
  NumberContainer,
  XDisplayText,
  YDisplayText,
  OtherDisplayText,
} from "./style";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const getSpacedThousands = (numberString) => {
  if (numberString === "Infinity") return numberString;
  let numberArray = numberString.split("");

  let isNegative = numberArray[0] === "-";
  if (isNegative) numberArray.splice(0, 1);

  let startingPoint = numberArray.includes(".")
    ? numberArray.indexOf(".")
    : numberArray.length;

  let counter = 0;
  for (let i = startingPoint; i > 0; i--) {
    if (counter == 3) {
      numberArray.splice(i, 0, ",");
      counter = 0;
    }
    counter++;
  }
  if (isNegative) numberArray.unshift("-");
  return numberArray.join("");
};

export default function DisplayPanel({
  display,
  isCurrentNumberReady,
  userDecimalPlaces,
  financialVars,
}) {
  //
  const getActualDecimalPlaces = (numberString, userDecimalPlaces) => {
    /*This function exists because the display is meant to support 10 number
    Therefore if the user wants 10 decimal places in a 10 digit number, he cant get it
    We adjust the user decimal places to the amount of display space we have (10) */
    let numberArray = numberString.split("");
    let isNegative = numberArray[0] === "-";

    if (isNegative) numberArray.splice(0, 1);
    //
    //numbers before the point, integer part of the number
    let prePointNumbers;
    for (
      prePointNumbers = 0;
      prePointNumbers < numberArray.length;
      prePointNumbers++
    ) {
      if (numberArray[prePointNumbers] === ".") break;
    }
    //console.log(prePointNumbers);
    //
    return Math.max(0, Math.min(userDecimalPlaces, 10 - prePointNumbers));
  };
  //
  //
  const getXDisplayText = (
    displayNumber,
    isCurrentNumberReady,
    userDecimalPlaces
  ) => {
    if (displayNumber === "NaN" || displayNumber === "Infinity") {
      return "Error";
    }
    //
    let actualDecimalPlaces = getActualDecimalPlaces(
      displayNumber,
      userDecimalPlaces
    );
    //
    let XDisplayNumber = displayNumber;
    if (isCurrentNumberReady) {
      XDisplayNumber = parseFloat(XDisplayNumber).toFixed(actualDecimalPlaces);
      XDisplayNumber = XDisplayNumber.toString();
      XDisplayNumber = getSpacedThousands(XDisplayNumber);
    }
    return XDisplayNumber;
  };
  //
  //
  const getOtherDisplayText = (displayNumber, userDecimalPlaces) => {
    if (displayNumber === "NaN" || displayNumber === "Infinity") {
      return "Error";
    }
    let actualDecimalPlaces = getActualDecimalPlaces(
      displayNumber,
      userDecimalPlaces
    );
    let otherDisplayNumber = displayNumber;
    otherDisplayNumber = parseFloat(otherDisplayNumber).toFixed(
      actualDecimalPlaces
    );
    otherDisplayNumber = otherDisplayNumber.toString();
    otherDisplayNumber = getSpacedThousands(otherDisplayNumber);
    return otherDisplayNumber;
  };
  //
  //
  const getOtherInfo = (info, financialVars) => {
    //Since Prettier made this function look ugly af (oh the irony)
    //I'll explain whats happening
    //We check to see if there is content in the array
    //If there is no content, we return an empty element that doesn't take any space
    //If there is content, we return an text element with the content
    // No content is empty string, content is a number in string format
    let infoDisplay;

    /*if (info === "n")
      infoDisplay =
        varValue === "" ? (
          <></>
        ) : (
          <ExtraInfoText>{`n=${varValue}`}</ExtraInfoText>
        );
    if (info === "i")
      infoDisplay =
        varValue === "" ? (
          <></>
        ) : (
          <ExtraInfoText>{`i=${varValue}`}</ExtraInfoText>
        );
    if (info === "PV")
      infoDisplay =
        varValue === "" ? (
          <></>
        ) : (
          <ExtraInfoText>{`PV=${varValue}`}</ExtraInfoText>
        );
    if (info === "PMT")
      infoDisplay =
        varValue === "" ? (
          <></>
        ) : (
          <ExtraInfoText>{`PMT=${varValue}`}</ExtraInfoText>
        );
    if (info === "FV")
      infoDisplay =
        varValue === "" ? (
          <></>
        ) : (
          <ExtraInfoText>{`FV=${varValue}`}</ExtraInfoText>
        );*/

    infoDisplay =
      financialVars[info] == "" ? (
        <></>
      ) : (
        <ExtraInfoText>{`${info}=${financialVars[info]}`}</ExtraInfoText>
      );
    return infoDisplay;
  };
  //
  //

  //
  //
  return (
    <DisplayPanelContainer>
      <ExtraInfoContainer>
        {getOtherInfo("n", financialVars)}
        {getOtherInfo("i", financialVars)}
        {getOtherInfo("PV", financialVars)}
        {getOtherInfo("PMT", financialVars)}
        {getOtherInfo("FV", financialVars)}
      </ExtraInfoContainer>
      <NumberContainer>
        <OtherDisplayText>
          {getOtherDisplayText(display[4], userDecimalPlaces)}
        </OtherDisplayText>
        <OtherDisplayText>
          {getOtherDisplayText(display[3], userDecimalPlaces)}
        </OtherDisplayText>
        <OtherDisplayText>
          {getOtherDisplayText(display[2], userDecimalPlaces)}
        </OtherDisplayText>
        <YDisplayText>
          {getOtherDisplayText(display[1], userDecimalPlaces)}
        </YDisplayText>
        <XDisplayText>
          {getXDisplayText(display[0], isCurrentNumberReady, userDecimalPlaces)}
        </XDisplayText>
      </NumberContainer>
    </DisplayPanelContainer>
  );
}
