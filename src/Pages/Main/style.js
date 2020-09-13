import styled from "styled-components/native";
import { Platform, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const CalculatorContainer = styled.View`
  background-color: #303030;
  flex: 1;
`;

export const ConfigHeader = styled.View`
  justify-content: center;
  align-items: flex-end;
  margin-top: ${Platform.OS === "ios" ? 40 : 20}px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const ConfigSymbol = styled.TouchableOpacity``;

export const DisplayContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
`;

export const SecondaryButtonsContainer = styled.View`
  height: ${windowHeight / 6.6}px;
  background-color: #424242;
  border-radius: 20px;
  margin-bottom: 7px;
`;

export const ButtonsContainer = styled.View`
  height: ${windowHeight / 2.75}px;
  width: 100%;
  background-color: #424242;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
