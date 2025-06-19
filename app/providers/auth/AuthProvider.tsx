import {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';
import { View } from 'react-native';
import {IContext, TypeUserState} from "@/providers/auth/auth-provider.interface";
import * as SplashScreen from 'expo-splash-screen';

export const AuthContext = createContext({} as IContext);

let ignore = SplashScreen.preventAutoHideAsync();

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>('');

  useEffect(() => {
    let mounted = true;

    const checkAccessToken = async () => {
      try {

      }  catch {

      } finally {
        await SplashScreen.hideAsync();
      }
    }

    let ignore = checkAccessToken();

    return () => {
      mounted = false;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
