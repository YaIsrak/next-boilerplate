import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function NavBrand() {
	return (
		<div>
			<Link href='/'>
				<HomeIcon className='h-6 w-6 text-foreground' />
			</Link>
		</div>
	);
}
