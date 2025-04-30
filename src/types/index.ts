export interface ProjectType {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: string[];
	category: 'Frontend' | 'Backend' | 'Fullstack';
	githubUrl?: string;
	liveUrl?: string;
}