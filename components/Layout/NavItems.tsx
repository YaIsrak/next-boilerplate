'use client';

import { NavItem } from '@/lib/constantData';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

export default function NavItems() {
	return (
		<div className='hidden md:flex'>
			<NavigationMenu>
				<NavigationMenuList>
					{NavItem.map((item) => (
						<NavigationMenuItem key={item.name}>
							<Link href={item.path} legacyBehavior passHref>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} no-underline text-foreground`}
								>
									{item.name}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

export function NavSideItem() {
	const { setTheme } = useTheme();
	return (
		<div className='hidden md:flex gap-2'>
			<Button>Login</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' size='icon'>
						<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
						<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
						<span className='sr-only'>Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem onClick={() => setTheme('light')}>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('system')}>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
