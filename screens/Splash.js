import { SplashScreenContainer } from "../Styled/StyledSplashScreen";
import { Text } from "react-native";
import SplashScreenHead from "../components/SplashScreen/SplashScreenHead";
import SplashScreenBody from "../components/SplashScreen/SplashScreenBody";

export default function Splash() {
  return (
    <SplashScreenContainer>
      <SplashScreenHead />
      <SplashScreenBody />
    </SplashScreenContainer>
  );
}
