import styled from "styled-components/native";
import { Platform, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const ButtonsPanelContainer = styled.View`
  flex: 1;
`;

export const MainButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-right: 5px;
  padding-left: 5px;
`;

export const MainButtonsColumn = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const MainButton = styled.TouchableHighlight`
  width: ${windowHeight / 13.5}px;
  height: ${windowHeight / 17}px;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  border-width: 0px;
  border-radius: 15px;
  margin: 2px;
  ${Platform.OS === "ios" ? "box-shadow: 0px 2px 1px black" : "elevation: 5"};
`;

export const EnterButton = styled.TouchableHighlight`
  width: ${windowHeight / 13.5}px;
  height: ${windowHeight / 7.1}px;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  border-width: 0px;
  border-radius: 15px;
  margin: 2px;
  ${Platform.OS === "ios" ? "box-shadow: 0px 2px 1px black" : "elevation: 5"};
`;

export const MainButtonText = styled.Text`
  color: #eee;
  font-size: ${windowHeight / 40}px;
  font-family: Roboto;
`;

export const EnterButtonText = styled.Text`
  color: #eee;
  font-size: ${windowHeight / 55}px;
`;
