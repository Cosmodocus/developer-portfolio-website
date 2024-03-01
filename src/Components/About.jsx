import React from 'react';

const About = () => {
	return (
		<div className='w-full  flex items-center justify-center pb-24'>
			<div className='flex flex-col gap-12 items-center leading-2'>
				<div className='text-left '>
					<h1 className='text-4xl font-bold pb-4'>About Me</h1>
					<p className='w-[1000px]'>
						Hello! My name is [Your Name], and I am a passionate software
						developer with a keen interest in creating innovative solutions that
						make a difference. I thrive on challenges and love to dive deep into
						complex problems to find elegant solutions.
					</p>
				</div>
				<div className='texleft'>
					<h2 className='text-xl font-semibold pb-2'>My Journey</h2>
					<p className='w-[1000px]'>
						My journey in the world of software development began [X years ago],
						and ever since, I've been on a continuous learning path, exploring
						new technologies and frameworks to expand my skill set. Along the
						way, I've had the opportunity to work on a variety of projects,
						ranging from small-scale web applications to large-scale enterprise
						solutions.
					</p>
				</div>
				<div className='text-left'>
					<h2 className='text-xl text-left font-semibold pb-2'>Expertise</h2>
					<p className='w-[1000px]'>
						My expertise lies in [mention your key areas of expertise, e.g.,
						frontend development, backend development, full-stack development,
						mobile app development, etc.]. I'm proficient in languages such as
						JavaScript, Python, and Java, and have hands-on experience with
						frameworks like React, Node.js, and Django.
					</p>
				</div>
				<div className='text-left'>
					<h2 className='text-xl font-semibold pb-2'>Approach</h2>
					<p className='w-[1000px]'>
						I believe in the power of collaboration and enjoy working closely
						with teams to turn ideas into reality. I'm a firm believer in
						writing clean, maintainable code and following best practices to
						ensure scalability and performance.
					</p>
				</div>
				<div className='text-left'>
					<h2 className='text-xl font-semibold pb-2'>Passion</h2>
					<p className='w-[1000px]'>
						Outside of coding, I'm passionate about [mention your hobbies,
						interests, or any other relevant information that gives a glimpse
						into your personality]. Whether it's hiking in the great outdoors or
						experimenting with new recipes in the kitchen, I'm always eager to
						explore new experiences and embrace challenges with an open mind.
					</p>
				</div>
				<div className='text-left'>
					<h2 className='text-xl font-semibold pb-2'>Get in Touch</h2>
					<p className='w-[1000px]'>
						I'm excited about the opportunity to connect with fellow developers,
						tech enthusiasts, and potential collaborators. If you'd like to
						discuss a project, share ideas, or simply say hello, feel free to
						reach out to me through [provide your contact information, e.g.,
						email address, LinkedIn profile, GitHub profile, etc.]. Thank you
						for taking the time to learn a bit about me. I look forward to
						connecting with you!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
