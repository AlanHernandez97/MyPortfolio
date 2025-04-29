import SectionTitle from '../components/SectionTitle/SectionTitle';
import SkillBar from '../components/SkillBar/SkillBar';
import { Download, Code, Server, Database } from 'lucide-react';

const About = () => {
	const frontendSkills = [
		{ name: 'React & Next.js', percentage: 95 },
		{ name: 'JavaScript/TypeScript', percentage: 90 },
		{ name: 'HTML & CSS', percentage: 85 },
		{ name: 'Tailwind CSS', percentage: 90 },
	];

	const backendSkills = [
		{ name: 'Node.js', percentage: 90 },
		{ name: 'PostgreSQL', percentage: 85 },
		{ name: 'MySQL', percentage: 80 },
		{ name: 'MongoDB', percentage: 85 },
	];

	return (
		<section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Acerca de mi"
					subtitle="Conoce más sobre mí y mi experiencia."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="order-2 md:order-1">
						<h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white transition-colors duration-300">
							Desarrollador Front-End ubicado en México
						</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
							Soy Alan Eduardo López Hernández, un apasionado desarrollador web Full Stack con experiencia en la creación de aplicaciones modernas y responsivas utilizando tecnologías de vanguardia.
							Mi camino en el desarrollo web comenzó hace 6 años, y desde entonces he estado completamente enganchado.
						</p>
						<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
							Estoy especializado en crear experiencias de usuario fluidas con React y Next.js en el frontend,
							mientras desarrollo sistemas backend robustos y escalables con Node.js y diversas tecnologías de bases de datos.
							Me apasiona especialmente escribir código limpio y eficiente, y mantenerme al día con las últimas tendencias de la industria.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-8">
							<div>
								<h4 className="font-bold text-indigo-600 dark:text-teal-400 mb-2 transition-colors duration-300">Educación</h4>
								<p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
									Ingeniería en Desarrollo de Software<br />
									Universidad Autónoma de Chiapas
								</p>
							</div>
							<div>
								<h4 className="font-bold text-indigo-600 dark:text-teal-400 mb-2 transition-colors duration-300">Experiencia</h4>
								<p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
									1+ año<br />
									Desarrollador Front-End
								</p>
							</div>
						</div>

						<a
							href="#"
							className="inline-flex items-center px-6 py-3 bg-indigo-600 dark:bg-teal-500 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-teal-600 transition-colors duration-300"
						>
							<Download size={18} className="mr-2" />
							Descargar CV
						</a>
					</div>

					<div className="order-1 md:order-2">
						<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-colors duration-300">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300">
									<div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-teal-400 mb-4 transition-colors duration-300">
										<Code size={28} />
									</div>
									<h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300">Frontend</h4>
									<p className="text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
										Desarrollo de UI moderno y responsivo
									</p>
								</div>
								<div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300">
									<div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-teal-400 mb-4 transition-colors duration-300">
										<Server size={28} />
									</div>
									<h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300">Backend</h4>
									<p className="text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
										Soluciones Server-Side escalables
									</p>
								</div>
								<div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300">
									<div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-teal-400 mb-4 transition-colors duration-300">
										<Database size={28} />
									</div>
									<h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300">Bases de datos</h4>
									<p className="text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
										Gestión de datos eficiente.
									</p>
								</div>
								<div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300">
									<div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-teal-400 mb-4 transition-colors duration-300">
										<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300">Responsivo</h4>
									<p className="text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
										Enfoque mobile-first.
									</p>
								</div>
							</div>

							<div>
								<h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white transition-colors duration-300">Frontend Skills</h3>
								{frontendSkills.map((skill, index) => (
									<SkillBar
										key={index}
										name={skill.name}
										percentage={skill.percentage}
										delay={300 + index * 100}
									/>
								))}

								<h3 className="text-xl font-bold mb-6 mt-8 text-gray-800 dark:text-white transition-colors duration-300">Backend Skills</h3>
								{backendSkills.map((skill, index) => (
									<SkillBar
										key={index}
										name={skill.name}
										percentage={skill.percentage}
										delay={700 + index * 100}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About