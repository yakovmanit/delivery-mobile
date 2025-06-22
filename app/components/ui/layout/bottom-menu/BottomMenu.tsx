import { FC } from 'react';
import { View } from 'react-native';
import { TypeNavigate } from '@/components/ui/layout/bottom-menu/menu.interface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { menuItems } from '@/components/ui/layout/bottom-menu/menu.data';
import MenuItem from '@/components/ui/layout/bottom-menu/MenuItem';

interface IBottomMenu {
	nav: TypeNavigate;
	currentRoute: string;
}

const BottomMenu: FC<IBottomMenu> = ({ nav, currentRoute }) => {
	const { bottom } = useSafeAreaInsets();

	return (
		<View
			className='pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#bbbbbb] bg-white'
			style={{
				paddingBottom: bottom + 20
			}}
		>
			{
				menuItems.map(item => (
					<MenuItem key={item.path} item={item} nav={nav} currentRoute={currentRoute} />
				))
			}
		</View>
	);
};

export default BottomMenu;
