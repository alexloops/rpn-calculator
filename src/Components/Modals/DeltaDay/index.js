import React, { useState } from "react";
import { Text, Keyboard } from "react-native";
import {
  ModalComponent,
  ModalHeader,
  ModalTitle,
  ExitSymbol,
  ModalSubtitle,
  DateContainer,
  DateLabel,
  DateInput,
  ErroMessage,
  ConfirmButton,
} from "./style";
import { Ionicons } from "@expo/vector-icons";

export default function DeltaDayModal({
  visible,
  setVisible,
  display,
  setDisplay,
}) {
  const [date1Value, setDate1] = useState("");
  const [date2Value, setDate2] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");

  var isFormatMMDDYYYY = false;
  var date1Ref;
  var date2Ref;
  const calculateDeltaDay = () => {
    //
    setErrorMessage(" ");
    //
    if (!date1Ref.isValid()) {
      setErrorMessage("Invalid Date 1");
      return;
    }
    if (!date2Ref.isValid()) {
      setErrorMessage("Invalid Date 2");
      return;
    }

    Keyboard.dismiss();
    //
    var parts1 = date1Value.split("/");
    var parts2 = date2Value.split("/");
    //
    // We only support two formats dd/mm/yyyy or mm/dd/yyyy
    let date1;
    let date2;
    if (isFormatMMDDYYYY) {
      date1 = new Date(parts1[2], parts1[0] - 1, parts1[1]);
      date2 = new Date(parts2[2], parts2[0] - 1, parts2[1]);
    } else {
      date1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
      date2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);
    }

    let deltaDay = Math.round(
      (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
    );
    deltaDay = deltaDay.toString();

    let newNumberArray = [deltaDay, ...display];
    newNumberArray.pop();
    setDisplay(newNumberArray);
    setVisible(false);
  };

  return (
    <ModalComponent visible={visible}>
      <ExitSymbol onPress={() => setVisible(false)}>
        <Ionicons name="md-close" size={32} color="#ddd" />
      </ExitSymbol>
      <ModalHeader>
        <ModalTitle>Number of days between dates</ModalTitle>
      </ModalHeader>
      <ModalSubtitle>
        Format expected {isFormatMMDDYYYY ? "MM/DD/YYYY" : "DD/MM/YYYY"}
      </ModalSubtitle>
      <DateContainer>
        <DateLabel>Date 1:</DateLabel>
        <DateInput
          onChangeText={(text) => setDate1(text)}
          value={date1Value}
          options={{
            format: isFormatMMDDYYYY ? "MM/DD/YYYY" : "DD/MM/YYYY",
          }}
          ref={(ref) => (date1Ref = ref)}
        />
      </DateContainer>
      <DateContainer>
        <DateLabel>Date 2:</DateLabel>
        <DateInput
          onChangeText={(text) => setDate2(text)}
          value={date2Value}
          options={{
            format: isFormatMMDDYYYY ? "MM/DD/YYYY" : "DD/MM/YYYY",
          }}
          ref={(ref) => (date2Ref = ref)}
        />
      </DateContainer>
      <ErroMessage> {errorMessage} </ErroMessage>
      <ConfirmButton
        title="Calculate and copy to X"
        onPress={() => calculateDeltaDay()}
      />
    </ModalComponent>
  );
}
