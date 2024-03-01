import React from 'react';

const Skills = () => {
	return (
		<div className=' py-32 flex flex-col items-center gap-8 justify-center'>
			<h1 className='text-4xl font-bold '>Skills</h1>
			<div className='grid md:grid-cols-3  grid-cols-1 gap-16'>
				<div className=' w-[400px] flex flex-col gap-2 border rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>HTML</h2>
					<p>Semantic HTML5</p>
					<p>Tags & Elements</p>
					<p>Attributes</p>
				</div>
				<div className=' w-[400px] flex flex-col gap-2 border rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>CSS</h2>
					<p>Selectors & Pseudo-Selectors</p>
					<p>Colour & Typography</p>
					<p>Flex and Grid Layouts</p>
				</div>
				<div className=' w-[400px] flex flex-col gap-2 border rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>JavaScript</h2>
					<p>DOM Manipulation</p>
					<p>Event Listeners</p>
					<p>ES6+ Methods</p>
					<p>Asynchronous Programming</p>
					<p>API Integration</p>
				</div>
				<div className=' w-[400px] flex flex-col gap-2 border rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>React.js</h2>
					<p>JSX</p>
					<p>Props & State</p>
					<p>Conditional Rendering</p>
					<p>List Rendering</p>
					<p>Hooks</p>
				</div>
				<div className=' w-[400px] flex flex-col gap-2 border rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>Tailwind CSS</h2>
					<p>Utility-Classes</p>
					<p>Mobile-First Responsive Design</p>
					<p>Tailwind Presets</p>
				</div>
				<div className=' w-[400px] flex flex-col gap-2 border rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>UI/UX Design</h2>
					<p>Colour Theory</p>
					<p>Typography</p>
					<p>Layout</p>
					<p>Visual Hierarchy</p>
					<p>Balance</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
