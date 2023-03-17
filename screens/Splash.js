import { SplashScreenContainer } from "../Styled/StyledSplashScreen";
import { Text } from "react-native";
import SplashScreenHead from "../components/SplashScreen/SplashScreenHead";
import SplashScreenBody from "../components/SplashScreen/SplashScreenBody";

export default function Splash({ navigation }) {
  return (
    <SplashScreenContainer>
      <SplashScreenHead />
      <SplashScreenBody navigation={navigation} />
    </SplashScreenContainer>
  );
}
