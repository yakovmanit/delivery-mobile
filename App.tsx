import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "react-native";
import Navigation from "@/navigation/Navigation";
import './global.css';
import AuthProvider from "@/providers/auth/AuthProvider";

export default function App() {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar barStyle="dark-content" />
    </>
  );
}