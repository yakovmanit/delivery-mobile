import { FC } from 'react';
import {Pressable, Text, View} from 'react-native';
import {useTypedNavigation} from "@/hooks/useTypedNavigation";

const Home: FC = () => {
  const { navigate } = useTypedNavigation();

  return (
    <View className="flex mt-20">
      <Text className="text-red-600">Home</Text>
      <Pressable onPress={() => navigate('Auth')}>
        <Text>Go auth</Text>
      </Pressable>
    </View>
  );
};

export default Home;
