import { FC } from 'react';
import {Control} from "react-hook-form";
import {IAuthFormData} from "@/types/auth.interface";
import Field from "@/components/ui/field/Field";
import {validEmail} from "@/components/screens/auth/email.regex";
import {View} from "react-native";

interface IAuthFields {
  control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
  return (
    <>
      <Field<IAuthFormData>
        placeholder='Enter email'
        control={control}
        name='email'
        rules={{
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Please enter a valid email address'
          }
        }}
        keyboardType='email-address'
      />
      <Field<IAuthFormData>
        placeholder='Enter password'
        control={control}
        name='password'
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password should be minimum 6 characters long'
          }
        }}
      />
    </>
  );
};

export default AuthFields;
