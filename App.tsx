import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "react-native";
import Navigation from "@/navigation/Navigation";
import './global.css';

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