import { View, Text } from "react-native";
import React from "react";
import {
  ContactInformation,
  ProfileInformation,
  RoleInformation,
} from "./Steps";
import { Steps } from "react-step-builder";

export default function StepsWrapper() {
  const steps = [
    { label: "Contact Information", component: <ContactInformation /> },
    { label: "Profile Information", component: <ProfileInformation /> },
    { label: "Role Information", component: <RoleInformation /> },
  ];

  return (
    <Steps>
      {steps.map((item) => (
        <React.Fragment key={item.label}>{item.component}</React.Fragment>
      ))}
    </Steps>
  );
}
