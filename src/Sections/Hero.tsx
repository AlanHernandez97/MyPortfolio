import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
	const scrollToAbout = () => {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center py-20 px-4"
		>
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-teal-50 dark:from-indigo-950/20 dark:to-teal-950/20 z-0"></div>
				<div className="absolute -bottom-64 -right-64 w-[40rem] h-[40rem] rounded-full bg-indigo-200/60 dark:bg-indigo-900/10 filter blur-3xl z-0"></div>
				<div className="absolute -top-64 -left-64 w-[40rem] h-[40rem] rounded-full bg-teal-200/60 dark:bg-teal-900/10 filter blur-3xl z-0"></div>
			</div>

			<div className="container mx-auto relative z-10">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
						<p className="text-indigo-600 dark:text-teal-400 font-medium mb-4 opacity-0 animate-[fadeInUp_0.7s_0.3s_forwards]">Hola, yo soy</p>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white opacity-0 animate-[fadeInUp_0.7s_0.6s_forwards]">
							Alan Eduardo <br />
							<span className="text-indigo-700 dark:text-teal-400">López Hernández</span>
						</h1>
						<p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-xl opacity-0 animate-[fadeInUp_0.7s_0.9s_forwards]">
							Un desarrollador Front-End apasionado, especializado en crear experiencias digitales excepcionales con tecnologías web modernas.
						</p>

						<div className="flex space-x-4 mb-8 opacity-0 animate-[fadeInUp_0.7s_1.2s_forwards]">
							<a
								href="#contact"
								onClick={(e) => {
									e.preventDefault();
									document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="px-6 py-3 bg-indigo-600 dark:bg-teal-500 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-teal-600 transition-colors duration-300"
							>
								Ponte en contacto.
							</a>
							<a
								href="#projects"
								onClick={(e) => {
									e.preventDefault();
									document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="px-6 py-3 border border-indigo-600 dark:border-teal-500 text-indigo-600 dark:text-teal-500 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
							>
								Ver Proyectos
							</a>
						</div>

						<div className="flex space-x-4 opacity-0 animate-[fadeInUp_0.7s_1.5s_forwards]">
							<Link
								href="https://github.com/AlanHernandez97"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								aria-label="GitHub"
							>
								<Github size={24} />
							</Link>
							<Link
								href="https://www.linkedin.com/in/alaneduardolopezhernandez/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								aria-label="LinkedIn"
							>
								<Linkedin size={24} />
							</Link>
							<a
								href="mailto:alanhernandez9716@gmail.com"
								className="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								aria-label="Email"
							>
								<Mail size={24} />
							</a>
						</div>
					</div>

					<div className="md:w-1/2 opacity-0 animate-[fadeIn_1s_1s_forwards]">
						<div className="relative">
							<div className="absolute inset-0 bg-indigo-600 dark:bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
							<div className="relative bg-gradient-to-tl from-indigo-700 to-teal-500 p-1 rounded-full">
								<div className="bg-white dark:bg-gray-900 rounded-full">
									<img
										src="/img/IMG_5571.JPG"
										alt="Alan Eduardo Lopez Hernandez"
										className="rounded-full w-full aspect-square object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
				<button
					onClick={scrollToAbout}
					className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-indigo-600 dark:text-teal-400 hover:shadow-lg animate-bounce transition-shadow duration-300"
					aria-label="Scroll down"
				>
					<ArrowDown size={20} />
				</button>
			</div>
		</section>
	);
}

export default Hero