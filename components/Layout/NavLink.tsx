import Link from 'next/link';
import { Button } from '../ui/button';

export default function NavLink({
	name,
	path,
	pathname,
	mobile,
}: {
	name: string;
	path: string;
	pathname: string;
	mobile?: boolean;
}) {
	return (
		<Link
			className={`no-underline text-foreground ${mobile && 'block'}`}
			href={path}
		>
			<Button
				variant={path === pathname ? 'default' : 'ghost'}
				className={`uppercase font-semibold`}
			>
				{name}
			</Button>
		</Link>
	);
}
