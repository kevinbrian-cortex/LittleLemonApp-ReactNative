import { View, Text, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { StyledInput } from "../../Styled/StyledLogin";
import { ButtonPrimary } from "../../Styled/StyledButton";
import { useSteps } from "react-step-builder";

//[email, password]
export function ContactInformation() {
  return (
    <View>
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
    </View>
  );
}

//[email, password]
export function ProfileInformation() {
  return (
    <View>
      <View>
        <TextInput inlineImageLeft="search_icon" />
        <Text>Your email address</Text>
      </View>

      <View>
        <Text>Password</Text>
        <StyledInput secureTextEntry={true} placeholder="min 8 characters" />
      </View>

      {/* <SignUpButtonsWrapper /> */}
    </View>
  );
}

//[email, password]
export function RoleInformation() {
  return (
    <View>
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
    </View>
  );
}

export const SignUpButtonsWrapper = (props) => {
  const steps = useSteps();

  return (
    <View>
      <ButtonPrimary onPress={steps.next}>
        <Text>Continue</Text>
      </ButtonPrimary>

      <Pressable
        style={{ alignSelf: "center", padding: 30 }}
        onPress={steps.prev}
      >
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};
