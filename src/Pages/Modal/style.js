import styled from "styled-components/native";

export const ModalContainer = styled.View`
  background-color: #303030;
  flex: 1;
`;

export const ModalHeader = styled.View`
  justify-content: center;
  align-items: flex-end;
  margin-top: ${Platform.OS === "ios" ? 40 : 20}px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const ExitSymbol = styled.TouchableOpacity``;
