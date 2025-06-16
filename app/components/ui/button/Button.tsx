import { FC, PropsWithChildren } from 'react';
import {Pressable, Text} from 'react-native';
import {IButton} from "@/components/ui/button/button.interface";
import cn from 'clsx';

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, ...rest }) => {
  return (
    <Pressable
      className={cn('mt-3.5 bg-blue-700 w-full py-3 font-light rounded-md', className)}
      {...rest}
    >
      <Text className='text-white text-center font-medium text-lg'>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
