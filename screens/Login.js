import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import {
  BottomWrapper,
  FormWrapper,
  HeaderWrapper,
} from "../components/Login/index";

export default function Login() {
  return (
    <StyledLoginView>
      <HeaderWrapper />
      <FormWrapper />
      <BottomWrapper />
      <View>
        <Text style={{ textAlign: "center" }}>Developed by Kevin Brian</Text>
      </View>
    </StyledLoginView>
  );
}

//styled
const StyledLoginView = styled.View`
  flex: 1;
`;
