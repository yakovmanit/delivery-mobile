import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar, Text} from "react-native";
import Navigation from "@/navigation/Navigation";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar barStyle="dark-content" />
      </SafeAreaProvider>
    </>
  );
}