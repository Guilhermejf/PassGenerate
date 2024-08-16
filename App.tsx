import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./src/components/Logo/Logo";
import { InputKey } from "./src/components/InputKey/InputKey";
import { ButtonBat } from "./src/components/Button/ButtonBat";
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Logo />
       
        <ButtonBat />
      </View>

      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#181717",
    alignItems: "center",
    justifyContent: "center",
  },
});
