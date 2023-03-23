import { View, Text, TextInput } from "react-native";
import React from "react";
import { StyledInput } from "../../Styled/StyledLogin";
import { ButtonPrimary } from "../../Styled/StyledButton";

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

      <SignUpButtonsWrapper />
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

      <SignUpButtonsWrapper />
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

const SignUpButtonsWrapper = (props) => {
  return (
    <View>
      <ButtonPrimary>
        <Text>Continue</Text>
      </ButtonPrimary>
    </View>
  );
};
