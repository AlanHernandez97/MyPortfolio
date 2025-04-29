import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0">
						<h3 className="text-xl font-bold text-indigo-700 dark:text-teal-400 mb-2">
							&lt;Alan.dev /&gt;
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Full Stack Developer specializing in modern web technologies
						</p>
					</div>

					<div className="flex space-x-4">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-teal-900 transition-colors duration-300"
							aria-label="GitHub"
						>
							<Github size={20} />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-teal-900 transition-colors duration-300"
							aria-label="LinkedIn"
						>
							<Linkedin size={20} />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-teal-900 transition-colors duration-300"
							aria-label="Twitter"
						>
							<Twitter size={20} />
						</a>
						<a
							href="mailto:alan@example.com"
							className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-teal-900 transition-colors duration-300"
							aria-label="Email"
						>
							<Mail size={20} />
						</a>
					</div>
				</div>

				<div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
					<p className="text-gray-600 dark:text-gray-400">
						&copy; {year} Alan Eduardo Lopez Hernandez. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer