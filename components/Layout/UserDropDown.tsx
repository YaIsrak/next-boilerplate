import { LogOut, User } from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Avatar, AvatarImage } from '../ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function UserDropDown({
	session,
}: {
	session?: Session | null;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage src={session?.user?.image || ''} />
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
				<DropdownMenuLabel className='font-medium text-foreground/50'>
					{session?.user?.email}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link
							href={'/profile'}
							className='flex items-center text-foreground no-underline'
						>
							<User className='mr-2' />
							Profile
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => signOut()}>
						<LogOut className='mr-2' />
						Logout
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
