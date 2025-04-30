import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/Context/ThemeContext';

const NavBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			setIsOpen(false);
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled
				? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
				: 'bg-transparent'
				}`}
		>
			<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
				<a
					href="#home"
					className="text-xl font-bold text-indigo-700 dark:text-teal-400 transition-colors duration-300"
					onClick={(e) => {
						e.preventDefault();
						scrollToSection('home');
					}}
				>
					&lt;Alan.dev /&gt;
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-8">
					<ul className="flex space-x-8">
						<li>
							<a
								href="#home"
								className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('home');
								}}
							>
								Inicio
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('about');
								}}
							>
								Acerca de mi
							</a>
						</li>
						<li>
							<a
								href="#projects"
								className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('projects');
								}}
							>
								Proyectos
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('contact');
								}}
							>
								Contacto
							</a>
						</li>
					</ul>
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
						aria-label="Toggle dark mode"
					>
						{theme === 'dark' ? (
							<Sun size={18} className="text-teal-400" />
						) : (
							<Moon size={18} className="text-indigo-600" />
						)}
					</button>
				</div>

				{/* Mobile Navigation Toggle */}
				<div className="flex md:hidden items-center space-x-2">
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
						aria-label="Toggle dark mode"
					>
						{theme === 'dark' ? (
							<Sun size={18} className="text-teal-400" />
						) : (
							<Moon size={18} className="text-indigo-600" />
						)}
					</button>
					<button
						onClick={toggleMenu}
						className="p-2 rounded text-gray-800 dark:text-gray-200"
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile Navigation Menu */}
			<div
				className={`fixed inset-0 bg-white dark:bg-gray-900 z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
					} md:hidden flex flex-col justify-center items-center`}
			>
				<ul className="flex flex-col space-y-8 text-center text-xl">
					<li>
						<a
							href="#home"
							className="block px-4 py-2 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('home');
							}}
						>
							Inicio
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="block px-4 py-2 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('about');
							}}
						>
							Acerca de mi
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="block px-4 py-2 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('projects');
							}}
						>
							Proyectos
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="block px-4 py-2 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-300"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('contact');
							}}
						>
							Contacto
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;