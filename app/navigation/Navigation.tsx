import { FC } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TypeRootStackParamList} from "@/navigation/navigation.types";
import {routes} from "@/navigation/routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // hide default nav header
        headerShown: false,
      }}>
        {
          routes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
