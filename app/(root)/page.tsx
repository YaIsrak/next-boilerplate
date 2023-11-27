import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function Home() {
	return (
		<section className=''>
			<div className='section item-center text-center space-y-6'>
				<Link
					href={'https://github.com/YaIsrak'}
					target='_blank'
					className='animate-fade-up font-bold border-2 rounded-full transition bg-background/0 hover:bg-foreground/10 px-12 py-1'
				>
					Github
				</Link>
				<h1 className='text-5xl md:text-7xl animate-fade-up'>
					Building blocks for <br /> your Next project
				</h1>
				<p
					className='animate-fade-up text-foreground/50 [text-wrap:balance] md:text-xl'
					style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
				>
					An opinionated collection of components, hooks, and utilities for your
					Next.js project.
				</p>
			</div>
			<div className='section container'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
					<Card className='col-span-1 md:col-span-2'>
						<CardHeader className='text-center'>
							<CardTitle className='text-4xl'>
								Beautiful, reusable components
							</CardTitle>
						</CardHeader>
						<CardContent className='p-6 '>
							<div className='flex justify-center flex-row gap-2'>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant='outline'>Dropdown</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuGroup>
											<DropdownMenuItem>Drop 1</DropdownMenuItem>
											<DropdownMenuItem>Drop 2</DropdownMenuItem>
											<DropdownMenuItem>Drop 3</DropdownMenuItem>
										</DropdownMenuGroup>
									</DropdownMenuContent>
								</DropdownMenu>

								<Dialog>
									<DialogTrigger asChild>
										<Button variant='outline'>Modal</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogTitle>Modal</DialogTitle>
									</DialogContent>
								</Dialog>
							</div>
						</CardContent>
						<CardFooter className='text-lg justify-center text-center'>
							Pre-built beautiful, a11y-first components, powered <br /> by Tailwind
							CSS Radix UI, and Framer Motion
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
}
