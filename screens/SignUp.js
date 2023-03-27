import React from "react";
import { View, Text } from "react-native";
import { StepsProvider } from "react-step-builder";
import { BottomWrapper } from "../components/Login";
import StepsWrapper from "../components/Register/StepsWrapper";
import { ButtonPrimary } from "../Styled/StyledButton";
import { StyledLoginView } from "./Login";
import { SignUpButtonsWrapper } from "../components/Register/Steps";

export default function SignUp() {
  return (
    <StyledLoginView>
      <StepsProvider>
        <StepsWrapper />
        <SignUpButtonsWrapper />
        <BottomWrapper />
      </StepsProvider>
    </StyledLoginView>
  );
}
