import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';

import { signIn } from 'next-auth/react';

export default function SignInButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='bg-foreground rounded-full' size='sm'>
					Sign in
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Sign In</DialogTitle>
					<DialogDescription>
						only your email and profile picture will be stored.
					</DialogDescription>
				</DialogHeader>
				<div>
					<Button
						className='w-full'
						variant='secondary'
						onClick={() => signIn('google')}
					>
						Sign in with google
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
