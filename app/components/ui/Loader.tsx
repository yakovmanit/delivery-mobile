import { FC } from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const Loader: FC = () => {
  return (
    <ActivityIndicator size="large" color="#111111" />
  );
};

export default Loader;
