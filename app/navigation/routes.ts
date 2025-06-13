import {IRoute} from "@/navigation/navigation.types";
import Auth from "@/components/screens/auth/Auth";
import Home from "@/components/screens/home/Home";

export const routes: IRoute[] = [
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'Home',
    component: Home,
  }
]