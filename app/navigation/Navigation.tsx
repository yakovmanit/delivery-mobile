import { FC, useEffect, useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import PrivateNavigator from '@/navigation/PrivateNavigator';
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu';
import { useAuth } from '@/hooks/useAuth';

const Navigation: FC = () => {
  const { user } = useAuth();

  const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined);

  const navRef = useNavigationContainerRef();


  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);

    const listener = navRef.addListener('state', () => {
      setCurrentRoute(navRef.getCurrentRoute()?.name);
    });

    return () => {
      navRef.removeListener('state', listener);
    }
  }, []);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigator />
      </NavigationContainer>

      {
        user && currentRoute && (
          <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
        )
      }
    </>
  );
};

export default Navigation;
