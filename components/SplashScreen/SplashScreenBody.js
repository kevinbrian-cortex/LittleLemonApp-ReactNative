import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  StyledSplashScreenBody,
  StyledSplashScreenWrapper,
} from "../../Styled/StyledSplashScreen";
import { ButtonPrimary } from "../../Styled/StyledButton";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SplashScreenBody({ navigation }) {
  return (
    <StyledSplashScreenBody>
      <StyledSplashScreenWrapper>
        <View style={styles.textWrapper}>
          <Text style={styles.textHead}>Leafboard</Text>
          <Text style={styles.textLead}>
            A platform built for a new way of working
          </Text>
        </View>

        <ButtonPrimary onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold", color: "#16233a" }}>
            <Text style={{ paddingLeft: 20 }}>Get Started for Free</Text>
            <Ionicons name="ios-chevron-forward-outline"></Ionicons>
          </Text>
        </ButtonPrimary>
      </StyledSplashScreenWrapper>

      <View style={{ flex: 0.09 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Made by Kevin Brian
        </Text>
      </View>
    </StyledSplashScreenBody>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  textHead: {
    fontSize: 45,
    fontWeight: "bold",
  },
  textLead: {
    fontSize: 15,
  },
});
