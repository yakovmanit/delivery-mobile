import { FC } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TypeRootStackParamList} from "@/navigation/navigation.types";
import {useAuth} from "@/hooks/useAuth";
import {routes} from "@/navigation/routes";
import Auth from "@/components/screens/auth/Auth";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigator: FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{
      // hide default nav header
      headerShown: false,
    }}>
      {
        user ? (
          routes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          ))
        ) : (
          <Stack.Screen name={'Auth'} component={Auth} />
        )
      }
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
