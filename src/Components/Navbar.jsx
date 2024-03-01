import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='w-full flex justify-between px-8 items-center py-4 bg-background text-text shadow-md fixed'>
			<h1 className='text-3xl font-bold'>Logo</h1>
			<ul className='flex gap-8 '>
				<li className='font-semibold'>
					<Link to='/'>Home</Link>
				</li>
				<li className='font-semibold'>
					<Link to='/details'>Projects</Link>
				</li>
				<li className='font-semibold'>
					<Link to='/contacts'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
