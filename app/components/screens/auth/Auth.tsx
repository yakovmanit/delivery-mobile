import {FC, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFormData} from "@/types/auth.interface";
import Button from "@/components/ui/button/Button";
import AuthFields from "@/components/screens/auth/AuthFields";

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    console.log(data);
  }

  return (
    <View className="mx-2 items-center justify-center h-full">
      <View className="w-3/4">
        <Text className='text-center text-black text-3xl font-bold mb-8'>
          {isReg ? 'Sign up' : 'Log in'}
        </Text>
        <Text className="text-center text-black text-xl font-medium mb-8">
          {
            isLoading ? (
              'Loading...'
            ) : (
              <View>
                <AuthFields control={control} />

                <Button onPress={handleSubmit(onSubmit)}>
                  {isReg ? 'Sign up' : 'Log in'}
                </Button>

                <Pressable onPress={() => setIsReg(prevState => !prevState)}>
                  <Text className='text-black text-center text-base mt-6'>
                    {isReg
                      ? 'Already have an account? '
                      : "Don't have an account "}
                    <Text className='text-blue-700'>
                      {isReg ? 'Login' : 'Sign up'}
                    </Text>
                  </Text>
                </Pressable>
              </View>
            )
          }
        </Text>
      </View>
    </View>
  );
};

export default Auth;
