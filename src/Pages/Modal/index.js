import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer, ModalHeader, ExitSymbol } from "./style.js";

export default function Modal({ navigation }) {
  return (
    <>
      <StatusBar style="light" />
      <ModalContainer>
        <ModalHeader>
          <ExitSymbol onPress={() => navigation.goBack()}>
            <Ionicons name="md-close" size={32} color="#ddd" />
          </ExitSymbol>
        </ModalHeader>
        <Text>Oi</Text>
      </ModalContainer>
    </>
  );
}
