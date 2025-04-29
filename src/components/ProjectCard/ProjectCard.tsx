import { ExternalLink, Github } from 'lucide-react';
import { ProjectType } from '../../types/index';

interface IProjectCardProps {
	project: ProjectType
}

const ProjectCard = ({ project }: IProjectCardProps) => {

	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
			<div className="relative overflow-hidden">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
					<div className="p-4 w-full">
						<div className="flex space-x-2">
							{project.tags.map((tag, index) => (
								<span
									key={index}
									className="text-xs px-2 py-1 rounded bg-indigo-600/80 dark:bg-teal-500/80 text-white"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

				<div className="flex justify-between items-center">
					<div className="flex space-x-4">
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								aria-label="GitHub repository"
							>
								<Github size={20} />
							</a>
						)}
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								aria-label="Live demo"
							>
								<ExternalLink size={20} />
							</a>
						)}
					</div>

					<button className="text-sm text-indigo-600 dark:text-teal-400 hover:underline transition-colors duration-300">
						Ver Más
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard