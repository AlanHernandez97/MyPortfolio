import React, { useEffect, useState } from 'react';

interface ISkillBarProps {
	name: string;
	percentage: number;
	delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: ISkillBarProps) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setWidth(percentage);
		}, delay);

		return () => clearTimeout(timer);
	}, [percentage, delay]);

	return (
		<div className="mb-6">
			<div className="flex justify-between mb-1">
				<span className="text-base font-medium text-gray-700 dark:text-gray-300">
					{name}
				</span>
				<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
					{percentage}%
				</span>
			</div>
			<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
				<div
					className="bg-indigo-600 dark:bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
					style={{ width: `${width}%` }}
				></div>
			</div>
		</div>
	);
}

export default SkillBar