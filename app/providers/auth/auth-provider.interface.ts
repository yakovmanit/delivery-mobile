import {IUser} from "@/types/user.interface";
import {Dispatch, SetStateAction} from "react";

export type TypeUserState = IUser | '';

export interface IContext {
  user: TypeUserState;
  setUser: Dispatch<SetStateAction<TypeUserState>>
}