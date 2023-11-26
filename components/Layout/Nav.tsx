'use client';
import { Button } from '@/components/ui/button';
import { NavItem } from '@/lib/constantData';
import { MenuIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import NavBrand from './NavBrand';
import NavItems, { NavSideItem } from './NavItems';
import NavLink from './NavLink';

export default function Component() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { setTheme } = useTheme();
	const pathname = usePathname();

	function MenuOpen() {
		isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
		console.log(isMenuOpen);
	}
	return (
		<section className='w-full py-4 border-b bg-background/50 backdrop-blur-xl fixed'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					{/* Navbar brand */}
					<NavBrand />

					{/* Nav Item */}
					<NavItems />

					{/* Side Item */}
					<NavSideItem />

					{/* Nav Menu Button */}
					<div className='md:hidden'>
						<Button
							aria-controls='mobile-menu'
							aria-expanded='false'
							size='icon'
							variant={isMenuOpen ? 'secondary' : 'outline'}
							onClick={() => MenuOpen()}
						>
							<MenuIcon />
						</Button>
					</div>
				</div>

				{/* Moblie Nav Item */}
				<div
					className={`mt-4 ${isMenuOpen ? 'inline' : 'hidden'}`}
					id='mobile-menu'
				>
					{NavItem.map((item) => (
						<NavLink
							key={item.name}
							name={item.name}
							path={item.path}
							pathname={pathname}
							mobile
						/>
					))}
				</div>
			</div>
		</section>
	);
}
