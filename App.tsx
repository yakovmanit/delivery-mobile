import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from '@/providers/auth/AuthProvider';
import Navigation from '@/navigation/Navigation';
import './global.css';
import Toast from '@/components/ui/Toast';

export default function App() {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar barStyle="dark-content" />
      <Toast />
    </>
  );
}