import { StyleSheet, View, Text } from "react-native";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { StyledView } from "./Styled/StyledView";

export default function App() {
  return (
    <StyledView>
      <SplashScreen />
    </StyledView>
  );
}
