import {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFormData} from "@/types/auth.interface";

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    console.log(data);
  }

  return (
    <View className="mx-2 items-center justify-center h-full">
      <View className="w-3/4">
        <Text className="text-center text-black text-xl font-medium mb-8">
          {isReg ? 'Sign up' : 'Log in'}
          {
            isLoading ? (
              'Loading...'
            ) : (
              'Form'
            )
          }
        </Text>
      </View>
    </View>
  );
};

export default Auth;
