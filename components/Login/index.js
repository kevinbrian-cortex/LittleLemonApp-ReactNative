import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  StyledBottomWrapper,
  StyledFormWrapper,
  StyledHeadWrapper,
  StyledInput,
} from "../../Styled/StyledLogin";
import { ButtonPrimary } from "../../Styled/StyledButton";
import { StyleSheet } from "react-native";
import { useSteps } from "react-step-builder";

//Head
export const HeaderWrapper = () => {
  return (
    <StyledHeadWrapper>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image
          source={require("../../assets/medium-color-svgrepo-com.png")}
          style={{ width: 30, height: 30 }}
          resizeMode="cover"
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Leafboard</Text>
      </View>
      <Text style={{ fontSize: 17 }}>Work without limits</Text>
    </StyledHeadWrapper>
  );
};

//Form
export const FormWrapper = ({ navigation }) => {
  return (
    <StyledFormWrapper>
      <View>
        <Text>Your email address</Text>
        <StyledInput
          keyboardType="email-address"
          placeholder="example@gmail.com"
        />
      </View>

      <View>
        <Text>Password</Text>
        <StyledInput secureTextEntry={true} placeholder="min 8 characters" />
      </View>

      <ButtonPrimary onPress={() => navigation.push("Register")}>
        <Text>Continue</Text>
      </ButtonPrimary>

      <View style={styles.createAccount}>
        <Text>Don't have account?</Text>
        <Pressable onPress={() => navigation.push("Register")}>
          <Text style={styles.link}>Create Account</Text>
        </Pressable>
      </View>
    </StyledFormWrapper>
  );
};

//Bottom
export const BottomWrapper = () => {
  return (
    <StyledBottomWrapper>
      <Text style={{ fontSize: 17 }}>or</Text>

      <Pressable style={styles.ButtonLink}>
        <Ionicons name="logo-google" style={styles.ButtonLinkIcon} />
        <Text style={styles.ButtonLinkText}>Sign up with Google</Text>
      </Pressable>

      <Pressable style={styles.ButtonLink}>
        <Ionicons name="logo-apple" style={styles.ButtonLinkIcon} />
        <Text style={styles.ButtonLinkText}>Sign up with Apple</Text>
      </Pressable>
    </StyledBottomWrapper>
  );
};

//style
const styles = StyleSheet.create({
  ButtonLink: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
  },
  ButtonLinkText: {
    fontSize: 18,
  },
  ButtonLinkIcon: {
    fontSize: 30,
  },
  createAccount: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  link: {
    color: "#a4f883",
  },
});
