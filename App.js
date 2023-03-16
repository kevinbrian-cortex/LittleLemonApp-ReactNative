import { StyleSheet, View } from "react-native";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  appHeader: {
    border: "1px solid red",
    backgroundColor: "#00235B",
    flex: 0.09,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  appHeaderText: {
    color: "white",
    fontSize: 20,
  },

  main: {
    flex: 1,
    border: "1px solid red",
    backgroundColor: "white",
    padding: 20,
  },
  textStyle: {},

  textHead: {
    fontWeight: "bold",
    fontSize: 19,
  },
});
