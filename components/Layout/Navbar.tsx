'use client';
import { NavItem } from '@/lib/constantData';
import useScroll from '@/lib/hooks/useScroll';
import { Menu } from 'lucide-react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';

import { useSession } from 'next-auth/react';
import ThemeButton from '../ThemeButton';
import SignInButton from './SignInButton';
import UserDropDown from './UserDropDown';

export default function Navbar() {
	const scrolled = useScroll(50);
	const { data: Session } = useSession();

	return (
		<nav
			className={`fixed top-0 w-full flex justify-center ${
				scrolled ? 'border-b bg-background/50 backdrop-blur-xl' : 'bg-background/0'
			} z-30 transition-all`}
		>
			<div className='container flex h-16 items-center justify-between w-full'>
				<NavBrand />

				{/* Center Menu */}
				<div className='hidden md:flex items-center gap-5'>
					<NavItems />
				</div>

				{/* SideMenu */}
				<div className='flex items-center gap-3'>
					{/* ThemeButton */}
					<ThemeButton />

					{/* user */}
					<div className='hidden md:block'>
						<UserButton session={Session} />
					</div>

					{/* Hamburger */}
					<div className='inline md:hidden'>
						<Sheet>
							<SheetTrigger asChild>
								<Menu />
							</SheetTrigger>
							<SheetContent side='left'>
								<SheetHeader>
									<NavBrand />
									<div className='flex justify-between'>
										<UserButton session={Session} />
										<ThemeButton />
									</div>
								</SheetHeader>
								<div className='mt-10 flex flex-col gap-4 h-auto'>
									<NavItems />
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}

export function NavItems() {
	const pathname = usePathname();
	return (
		<>
			{NavItem.map((item) => (
				<Link
					key={item.path}
					href={item.path}
					className={`no-underline text-foreground ${
						pathname === item.path && 'text-primary'
					}`}
				>
					{item.name}
				</Link>
			))}
		</>
	);
}

export function NavBrand() {
	return (
		<Link
			href='/'
			className='text-2xl no-underline font-semibold text-foreground'
		>
			<p>BoilerPlater</p>
		</Link>
	);
}

export function UserButton({ session }: { session?: Session | null }) {
	return <>{session ? <UserDropDown session={session} /> : <SignInButton />}</>;
}
