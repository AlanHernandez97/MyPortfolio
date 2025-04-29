import React from 'react'

interface ISectionTitleProps {
	title: string;
	subtitle?: string;
	centered?: boolean;
}

const SectionTitle = ({ title, centered = true, subtitle }: ISectionTitleProps) => {
	return (
		<div className={`mb-12 ${centered ? 'text-center' : ''}`}>
			<h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700 dark:text-teal-400 transition-colors duration-300">
				{title}
			</h2>
			{subtitle && (
				<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
					{subtitle}
				</p>
			)}
			<div className={`h-1 w-24 bg-indigo-600 dark:bg-teal-500 mt-4 rounded transition-colors duration-300 ${centered ? 'mx-auto' : ''}`}></div>
		</div>
	);
}

export default SectionTitle