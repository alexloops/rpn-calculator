import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import { TextInputMask } from "react-native-masked-text";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").height;

export const ModalComponent = styled(Modal).attrs({
  animationIn: "slideInUp",
  animationOut: "slideOutDown",
  transparent: true,
})`
  justify-content: flex-start;
  align-items: center;
  background-color: #525252;
  align-self: center;
  height: ${windowHeight / 2.35}px;
  max-width: ${windowWidth / 1.8}px;
  box-shadow: 0px 2px 1px black;
  ${"elevation: 10;"}
  border-radius: 20px;
  padding: 15px 10px 10px 10px;
  position: absolute;
  bottom: ${windowHeight / 10}px; ;
`;

export const ModalHeader = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 20px;
`;

export const ModalTitle = styled.Text`
  color: #ddd;
  font-size: ${windowHeight / 37}px;
  font-weight: bold;
`;

export const ModalSubtitle = styled.Text`
  color: #ddd;
  font-size: ${windowHeight / 40}px;
  margin-bottom: 20px;
`;

export const ExitSymbol = styled.TouchableOpacity`
  position: absolute;
  right: 13px;
  top: 5px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 20px;
`;

export const DateLabel = styled.Text`
  font-size: ${windowHeight / 30}px;
  color: #ddd;
`;

export const DateInput = styled(TextInputMask).attrs({
  type: "datetime",
  keyboardType: "numeric",
  placeholder: "00/00/0000",
  selectionColor: "#000",
})`
  background-color: #bbb;
  margin-left: 10px;
  font-size: ${windowHeight / 40}px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
`;

export const ErroMessage = styled.Text`
  font-size: ${windowHeight / 45}px;
  margin-bottom: 8px;
  color: #e55;
`;

export const ConfirmButton = styled.Button.attrs({ color: "#323232" })``;
