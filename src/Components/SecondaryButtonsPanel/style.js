import styled from "styled-components/native";
import { Platform, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const ButtonsCarousel = styled.ScrollView.attrs({
  horizontal: true,
  containerContentStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const SecondaryButtonsColumn = styled.View`
  flex: 1;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  margin-left: ${windowHeight / 100}px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  width: ${windowHeight / 17}px;
  height: ${windowHeight / 18}px;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  border-width: 0px;
  border-radius: 15px;
  margin-right: 2px;
  margin-left: 7px;
  ${Platform.OS === "ios" ? "box-shadow: 0px 2px 1px black" : "elevation: 5"};
`;

export const SecondaryButtonText = styled.Text`
  color: #eee;
  font-size: ${windowHeight / 45}px;
  font-family: Roboto;
`;
