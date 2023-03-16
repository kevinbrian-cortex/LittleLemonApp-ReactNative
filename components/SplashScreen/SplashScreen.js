import { SplashScreenContainer } from "../../Styled/StyledSplashScreen";
import { Text } from "react-native";
import SplashScreenHead from "./SplashScreenHead";
import SplashScreenBody from "./SplashScreenBody";

export default function SplashScreen() {
  return (
    <SplashScreenContainer>
      <SplashScreenHead />
      <SplashScreenBody />
    </SplashScreenContainer>
  );
}
