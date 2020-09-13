import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const DisplayPanelContainer = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  border-radius: 20px;
  padding: 10px 10px 10px 10px;
  width: 100%;
  background-color: #323232;
  ${Platform.OS === "ios" ? "box-shadow: 0px 2px 1px black" : "elevation: 30"};
`;

export const NumberContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const ExtraInfoContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export const ExtraInfoText = styled.Text`
  font-size: ${windowHeight / 60}px;
  font-family: Roboto;
  color: rgba(255, 255, 255, 0.7);
`;

export const XDisplayText = styled.Text`
  font-size: ${windowHeight / 22}px;
  font-family: Roboto;
  color: rgba(255, 255, 255, 0.95);
`;

export const YDisplayText = styled.Text`
  font-size: ${windowHeight / 35}px;
  font-family: Roboto;
  color: rgba(255, 255, 255, 0.7);
`;

export const OtherDisplayText = styled.Text`
  font-size: ${windowHeight / 55}px;
  font-family: Roboto;
  color: rgba(255, 255, 255, 0.7);
`;
