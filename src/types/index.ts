export interface ProjectType {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: string[];
	category: 'frontend' | 'backend' | 'fullstack';
	githubUrl?: string;
	liveUrl?: string;
}