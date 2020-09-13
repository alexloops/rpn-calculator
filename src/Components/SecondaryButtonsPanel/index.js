import React from "react";

import {
  ButtonsCarousel,
  SecondaryButtonsColumn,
  SecondaryButton,
  SecondaryButtonText,
} from "./style";

export default function SecondaryButtonsPanel({
  xOnlyOperationPressFunction,
  operationPressFunction,
  percentPressFunction,
  openDeltaDayModal,
  financialPressFunction,
}) {
  return (
    <>
      <ButtonsCarousel>
        <SecondaryButtonsColumn>
          <SecondaryButton onPress={() => operationPressFunction("power")}>
            <SecondaryButtonText>Yˣ</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton
            onPress={() => xOnlyOperationPressFunction("square")}
          >
            <SecondaryButtonText>√x</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton
            onPress={() => xOnlyOperationPressFunction("invert")}
          >
            <SecondaryButtonText>1/x</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton onPress={() => xOnlyOperationPressFunction("euler")}>
            <SecondaryButtonText>eˣ</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton
            onPress={() => xOnlyOperationPressFunction("fatorial")}
          >
            <SecondaryButtonText>n!</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton onPress={() => xOnlyOperationPressFunction("ln")}>
            <SecondaryButtonText>Ln</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton onPress={() => percentPressFunction("percent")}>
            <SecondaryButtonText>%</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton onPress={() => percentPressFunction("total")}>
            <SecondaryButtonText>%T</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton onPress={() => percentPressFunction("delta")}>
            <SecondaryButtonText>Δ%</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton onPress={() => openDeltaDayModal(true)}>
            <SecondaryButtonText>Δday</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton onPress={() => financialPressFunction("n")}>
            <SecondaryButtonText>n</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton onPress={() => financialPressFunction("i")}>
            <SecondaryButtonText>i</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton onPress={() => financialPressFunction("PV")}>
            <SecondaryButtonText>PV</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton onPress={() => financialPressFunction("PMT")}>
            <SecondaryButtonText>PMT</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton onPress={() => financialPressFunction("FV")}>
            <SecondaryButtonText>FV</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton>
            <SecondaryButtonText>CF</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton>
            <SecondaryButtonText>NPV</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton>
            <SecondaryButtonText>IRR</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton>
            <SecondaryButtonText>Price</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton>
            <SecondaryButtonText>Wacc</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton>
            <SecondaryButtonText>Capm</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton>
            <SecondaryButtonText>{"B&S"}</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
        <SecondaryButtonsColumn>
          <SecondaryButton>
            <SecondaryButtonText>Oi</SecondaryButtonText>
          </SecondaryButton>
          <SecondaryButton>
            <SecondaryButtonText>Oi</SecondaryButtonText>
          </SecondaryButton>
        </SecondaryButtonsColumn>
      </ButtonsCarousel>
    </>
  );
}
