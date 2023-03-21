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
      <View>
        <HeaderWrapper />
        <FormWrapper />
        <BottomWrapper />
        {/* <View>
        <Text style={{ textAlign: "center" }}>Developed by Kevin Brian</Text>
      </View> */}
      </View>
    </StyledLoginView>
  );
}

//styled
const StyledLoginView = styled.ScrollView`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
