import {TypeFeatherIconName} from '@/types/icon.interface';
import {TypeRootStackParamList} from '@/navigation/navigation.types';

export interface IMenuItem {
  icon: TypeFeatherIconName;
  path: keyof TypeRootStackParamList;
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void