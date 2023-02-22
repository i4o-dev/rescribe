import { Link } from '@remix-run/react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useContext } from 'react'
import { RescribeContext } from '../constants'

function Navbar() {
	const config = useContext(RescribeContext)

	// const navItems = [
	// 	{
	// 		id: '1',
	// 		label: 'Docs',
	// 		href: '/docs',
	// 	},
	// 	{
	// 		id: '2',
	// 		label: 'About',
	// 		href: '/about',
	// 	},
	// ]

	return (
		<header className='rs-w-screen rs-h-20 rs-flex rs-flex-wrap rs-items-center rs-justify-between rs-px-4 sm:rs-px-6 lg:rs-px-8 rs-py-4 rs-border rs-border-gray-200'>
			<div className='rs-relative rs-flex rs-flex-grow rs-basis-0 rs-items-center'>
				<Link aria-label='Home page' to='/'>
					{typeof config.logo === 'string' ? (
						<img className='rs-flex rs-h-8' src={config.logo} />
					) : (
						config.logo
					)}
				</Link>
			</div>
			<div className='rs-flex rs-flex-grow rs-items-center rs-justify-end rs-gap-2'>
				{/* <Nav items={navItems} /> */}
				{config.navbar?.search && (
					<input
						className='rs-w-80 rs-h-12 rs-px-4 rs-py-1 rs-rounded-md rs-text-sm'
						placeholder='Search...'
					/>
				)}
				<a
					aria-label='Github Repo'
					href='https://github.com/i4o-oss/rescribe'
					target='_blank'
					rel='noreferrer noopener'
				>
					<GitHubLogoIcon className='rs-w-6 rs-h-6' />
				</a>
				{config.theme?.darkModeToggle}
			</div>
		</header>
	)
}

export default Navbar
