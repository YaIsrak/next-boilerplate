/* eslint-disable react/no-unescaped-entities */

import LogInCard from '@/components/Card/LogInCard';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { BellRing, Check } from 'lucide-react';

export default function page() {
	const notifications = [
		{
			title: 'Your call has been confirmed.',
			description: '1 hour ago',
		},
		{
			title: 'You have a new message!',
			description: '1 hour ago',
		},
		{
			title: 'Your subscription is expiring soon!',
			description: '2 hours ago',
		},
	];

	return (
		<section className='section'>
			<div className='container space-y-4'>
				{/* Heading */}
				<h1>The Joke Tax Chronicles</h1>
				<h2>The King's Plan</h2>
				<h3>Jokester's Revolt</h3>
				<h4>Jokester's Revolt</h4>

				{/* Paragraph */}
				<p>
					Once upon a time, in a far-off land, there was a very lazy king who spent
					all day lounging on his throne. One day, his advisors came to him with a
					problem: the kingdom was running out of money.
					<a href='#'>a brilliant plan</a>: he would tax the jokes in the kingdom.
				</p>

				{/* Blockquote */}
				<blockquote>
					"After all," he said, "everyone enjoys a good joke, so it's only fair that
					they should pay for the privilege."
				</blockquote>

				{/* List */}
				<ul className=''>
					<li>1st level of puns: 5 gold coins</li>
					<li>2nd level of jokes: 10 gold coins</li>
					<li>3rd level of one-liners : 20 gold coins</li>
				</ul>

				<div>
					<h1>Make it yours.</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12'>
						<Card className='col-span-2'>
							<CardHeader>
								<CardTitle>Notifications</CardTitle>
								<CardDescription>You have 3 unread messages.</CardDescription>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center space-x-4 rounded-md border p-4'>
									<BellRing />
									<div className='flex-1 space-y-1'>
										<p className='text-sm font-medium leading-none'>Push Notifications</p>
										<p className='text-sm text-muted-foreground'>
											Send notifications to device.
										</p>
									</div>
								</div>
								<div>
									{notifications.map((notification, index) => (
										<div
											key={index}
											className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'
										>
											<span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
											<div className='space-y-1'>
												<p className='text-sm font-medium leading-none'>
													{notification.title}
												</p>
												<p className='text-sm text-muted-foreground'>
													{notification.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</CardContent>
							<CardFooter>
								<Button className='w-full'>
									<Check className='mr-2 h-4 w-4' /> Mark all as read
								</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Button</CardTitle>
								<CardDescription>Button Component</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='grid grid-cols-2 gap-2'>
									<Button>Click me</Button>
									<Button variant={'secondary'}>Secondary</Button>
									<Button variant={'destructive'}>destructive</Button>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Create project</CardTitle>
								<CardDescription>Deploy your new project in one-click.</CardDescription>
							</CardHeader>
							<CardContent>
								<form>
									<div className='grid w-full items-center gap-4'>
										<div className='flex flex-col space-y-1.5'>
											<Input id='name' placeholder='Name of your project' />
										</div>
										<div className='flex flex-col space-y-1.5'>
											<Select>
												<SelectTrigger id='framework'>
													<SelectValue placeholder='Select' />
												</SelectTrigger>
												<SelectContent position='popper'>
													<SelectItem value='next'>Next.js</SelectItem>
													<SelectItem value='sveltekit'>SvelteKit</SelectItem>
													<SelectItem value='astro'>Astro</SelectItem>
													<SelectItem value='nuxt'>Nuxt.js</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>
								</form>
							</CardContent>
							<CardFooter className='flex justify-between'>
								<Button variant='outline'>Cancel</Button>
								<Button>Deploy</Button>
							</CardFooter>
						</Card>
						<LogInCard />
					</div>
				</div>
			</div>
		</section>
	);
}
