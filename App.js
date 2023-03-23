import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import Splash from "./screens/Splash";
import { StyledView } from "./Styled/StyledView";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/SignUp";

//instance stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
