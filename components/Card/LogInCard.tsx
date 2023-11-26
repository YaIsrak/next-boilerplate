import { FacebookIcon, GithubIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function LogInCard() {
	return (
		<Card className='col-span-2'>
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardDescription>
					Enter your email below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-2 gap-2'>
					<Button variant='outline' className='gap-2'>
						<GithubIcon /> GitHub
					</Button>
					<Button variant='outline' className='gap-2'>
						<FacebookIcon />
						Facebook
					</Button>
				</div>
				<div className='py-6'>
					<Label htmlFor='email'>Email</Label>
					<Input placeholder='m@example.com' type='email' id='email' />
					<Label htmlFor='password'>Password</Label>
					<Input
						placeholder='Enter your password...'
						type='password'
						id='password'
					/>
				</div>
				<Button className='w-full'>Create Account</Button>
			</CardContent>
		</Card>
	);
}
