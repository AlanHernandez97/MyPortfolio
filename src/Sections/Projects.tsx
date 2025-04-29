import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { ProjectType } from '../types';

const Projects = () => {
	const [filter, setFilter] = useState<string>('all');

	const projects: ProjectType[] = [
		{
			id: 1,
			title: 'E-commerce Platform',
			description: 'A full-featured e-commerce platform with product catalog, cart, and checkout functionality.',
			image: 'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
			category: 'fullstack',
			githubUrl: 'https://github.com',
			liveUrl: 'https://example.com',
		},
		{
			id: 2,
			title: 'Task Management App',
			description: 'A productivity app allowing users to create, organize and track tasks with real-time updates.',
			image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			tags: ['React', 'Node.js', 'PostgreSQL'],
			category: 'backend',
			githubUrl: 'https://github.com',
			liveUrl: 'https://example.com',
		},
		{
			id: 3,
			title: 'Travel Blog',
			description: 'A responsive travel blog with dynamic content management system and image optimization.',
			image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			tags: ['Next.js', 'Tailwind CSS', 'MySQL'],
			category: 'frontend',
			githubUrl: 'https://github.com',
			liveUrl: 'https://example.com',
		},
		{
			id: 4,
			title: 'Real-time Chat Application',
			description: 'A messaging platform with real-time communication, user authentication, and message history.',
			image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
			category: 'fullstack',
			githubUrl: 'https://github.com',
			liveUrl: 'https://example.com',
		},
		{
			id: 5,
			title: 'Fitness Tracker',
			description: 'An app to track workouts, nutrition, and progress with visualizations and goal setting.',
			image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			tags: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
			category: 'fullstack',
			githubUrl: 'https://github.com',
			liveUrl: 'https://example.com',
		},
		{
			id: 6,
			title: 'Weather Dashboard',
			description: 'A weather visualization app displaying current conditions and forecasts with interactive maps.',
			image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			tags: ['React', 'Tailwind CSS', 'API Integration'],
			category: 'frontend',
			githubUrl: 'https://github.com',
			liveUrl: 'https://example.com',
		},
	];

	const filteredProjects = filter === 'all'
		? projects
		: projects.filter(project => project.category === filter);

	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Mis proyectos"
					subtitle="Explore mi trabajo mas reciente"
				/>

				<div className="flex justify-center mb-12">
					<div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg transition-colors duration-300">
						{['Todo', 'Frontend', 'Backend', 'Fullstack'].map((category) => (
							<button
								key={category}
								onClick={() => setFilter(category)}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${filter === category
									? 'bg-indigo-600 dark:bg-teal-500 text-white shadow-md'
									: 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
									}`}
							>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</button>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>

				<div className="text-center mt-12">
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-6 py-3 border border-indigo-600 dark:border-teal-500 text-indigo-600 dark:text-teal-500 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
					>
						Ver más en GitHub
					</a>
				</div>
			</div>
		</section>
	);
}

export default Projects