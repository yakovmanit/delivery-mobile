import {IRoute} from "@/navigation/navigation.types";
import Auth from "@/components/screens/auth/Auth";
import Home from "@/components/screens/home/Home";
import Search from '@/components/screens/search/Search';
import Favorites from '@/components/screens/favorites/Favorites';
import Explorer from '@/components/screens/explorer/Explorer';
import Profile from '@/components/screens/profile/Profile';

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'Favorites',
    component: Favorites,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'Explorer',
    component: Explorer,
  },
  {
    name: 'Profile',
    component: Profile,
  },
]