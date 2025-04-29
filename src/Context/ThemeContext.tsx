import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
	theme: ThemeType;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>('light');

	useEffect(() => {
		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem('theme') as ThemeType | null;

		if (savedTheme) {
			setTheme(savedTheme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		}
	}, []);

	useEffect(() => {
		// Apply theme to document
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// Save theme preference
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};