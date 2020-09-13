import React from "react";

import {
  ButtonsPanelContainer,
  MainButtonsContainer,
  MainButtonsColumn,
  MainButton,
  MainButtonText,
  EnterButton,
  EnterButtonText,
} from "./style";

import { LinearGradient } from "expo-linear-gradient";

export default function ButtonsPanel({
  clearPressFunction,
  numberPressFunction,
  enterPressFunction,
  pointPressFunction,
  operationPressFunction,
  CHSPressFunction,
  swapXYPressFunction,
  rollPressFunction,
  deletePressFunction,
}) {
  return (
    <ButtonsPanelContainer>
      {/*<LinearGradient colors={["#5f5f5f", "#404040"]} style={{ flex: 1 }}>*/}
      <MainButtonsContainer>
        <MainButtonsColumn>
          <MainButton onPress={() => clearPressFunction()}>
            <MainButtonText>Clear</MainButtonText>
          </MainButton>
          <MainButton onPress={() => swapXYPressFunction()}>
            <MainButtonText>{"x⇆y"}</MainButtonText>
          </MainButton>
          <EnterButton onPress={() => enterPressFunction()}>
            <EnterButtonText>{"E\nN\nT\nE\nR"}</EnterButtonText>
          </EnterButton>
        </MainButtonsColumn>
        <MainButtonsColumn>
          <MainButton onPress={() => deletePressFunction()}>
            <MainButtonText> ⌫ </MainButtonText>
          </MainButton>
          <MainButton onPress={() => rollPressFunction()}>
            <MainButtonText>R▽</MainButtonText>
          </MainButton>
          <MainButton onPress={() => 1 == 1}>
            <MainButtonText>RCL</MainButtonText>
          </MainButton>
          <MainButton onPress={() => 1 == 1}>
            <MainButtonText>STO</MainButtonText>
          </MainButton>
        </MainButtonsColumn>
        <MainButtonsColumn>
          <MainButton onPress={() => numberPressFunction("7")}>
            <MainButtonText>7</MainButtonText>
          </MainButton>
          <MainButton onPress={() => numberPressFunction("4")}>
            <MainButtonText>4</MainButtonText>
          </MainButton>
          <MainButton onPress={() => numberPressFunction("1")}>
            <MainButtonText>1</MainButtonText>
          </MainButton>
          <MainButton onPress={() => numberPressFunction("0")}>
            <MainButtonText>0</MainButtonText>
          </MainButton>
        </MainButtonsColumn>
        <MainButtonsColumn>
          <MainButton onPress={() => numberPressFunction("8")}>
            <MainButtonText>8</MainButtonText>
          </MainButton>
          <MainButton onPress={() => numberPressFunction("5")}>
            <MainButtonText>5</MainButtonText>
          </MainButton>
          <MainButton onPress={() => numberPressFunction("2")}>
            <MainButtonText>2</MainButtonText>
          </MainButton>
          <MainButton onPress={() => pointPressFunction()}>
            <MainButtonText>.</MainButtonText>
          </MainButton>
        </MainButtonsColumn>
        <MainButtonsColumn>
          <MainButton onPress={() => numberPressFunction("9")}>
            <MainButtonText>9</MainButtonText>
          </MainButton>
          <MainButton onPress={() => numberPressFunction("6")}>
            <MainButtonText>6</MainButtonText>
          </MainButton>
          <MainButton onPress={() => numberPressFunction("3")}>
            <MainButtonText>3</MainButtonText>
          </MainButton>
          <MainButton onPress={() => CHSPressFunction()}>
            <MainButtonText>CHS</MainButtonText>
          </MainButton>
        </MainButtonsColumn>
        <MainButtonsColumn>
          <MainButton onPress={() => operationPressFunction("division")}>
            <MainButtonText>÷</MainButtonText>
          </MainButton>
          <MainButton onPress={() => operationPressFunction("multiplication")}>
            <MainButtonText>×</MainButtonText>
          </MainButton>
          <MainButton onPress={() => operationPressFunction("subtraction")}>
            <MainButtonText>−</MainButtonText>
          </MainButton>
          <MainButton onPress={() => operationPressFunction("addition")}>
            <MainButtonText>＋</MainButtonText>
          </MainButton>
        </MainButtonsColumn>
      </MainButtonsContainer>
      {/*</ButtonsPanelContainer></LinearGradient>*/}
    </ButtonsPanelContainer>
  );
}
