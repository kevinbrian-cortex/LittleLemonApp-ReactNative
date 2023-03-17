import { StyleSheet, View, Text } from "react-native";
import Splash from "./screens/Splash";
import { StyledView } from "./Styled/StyledView";
import Login from "./screens/Login";

export default function App() {
  return (
    <StyledView>
      {/* <Splash /> */}
      <Login />
    </StyledView>
  );
}
