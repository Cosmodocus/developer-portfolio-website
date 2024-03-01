import React from 'react';

const Projects = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center py-32'>
			<h1 className='text-4xl font-bold pb-8'>Featured Projects</h1>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-16'>
				<div className=' flex flex-col md:w-[500px] items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<h2 className='text-2xl  font-bold'>Landing Page</h2>
					<p className='w-[500px] text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						euismod bibendum laoreet.
					</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p> React, Tailwind CSS</p>
					</div>
					<div className='flex gap-2'>
						<button className='border rounded-full py-2 px-4'>GitHub</button>
						<button className='border rounded-full py-2 px-4'>Live Demo</button>
					</div>
				</div>
				<div className='flex flex-col md:w-[500px] items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<h2 className='text-2xl font-bold'>National Pokedex</h2>
					<p className='w-[500px] text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						euismod bibendum laoreet.
					</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p>HTML, CSS, JavaScript, PokeAPI</p>
					</div>
					<div className='flex gap-2'>
						<button className='border rounded-full py-2 px-4'>GitHub</button>
						<button className='border rounded-full py-2 px-4'>Live Demo</button>
					</div>
				</div>
				<div className='flex flex-col md:w-[500px] items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<h2 className='text-2xl font-bold'>Netflix Clone</h2>
					<p className='w-[500px] text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						euismod bibendum laoreet.
					</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p> React, Tailwind CSS, Firebase, Axios, TMDB API</p>
					</div>
					<div className='flex gap-2'>
						<button className='border rounded-full py-2 px-4'>GitHub</button>
						<button className='border rounded-full py-2 px-4'>Live Demo</button>
					</div>
				</div>
				<div className='flex flex-col md:w-[500px] items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<h2 className='text-2xl font-bold'>Youtube Clone</h2>
					<p className='w-[500px] text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						euismod bibendum laoreet.
					</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p> React, Tailwind CSS, Youtube Data API V3</p>
					</div>
					<div className='flex gap-2'>
						<button className='border rounded-full py-2 px-4'>GitHub</button>
						<button className='border rounded-full py-2 px-4'>Live Demo</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
