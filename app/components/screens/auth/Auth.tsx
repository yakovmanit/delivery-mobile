import { FC } from 'react';
import {Pressable, Text, View} from 'react-native';
import {useTypedNavigation} from "@/hooks/useTypedNavigation";

const Auth: FC = () => {
  const { navigate } = useTypedNavigation();

  return (
    <View className="mt-20">
      <Text>Auth</Text>
      <Pressable onPress={() => navigate('Home')}>
        <Text>Go Home</Text>
      </Pressable>
    </View>
  );
};

export default Auth;
