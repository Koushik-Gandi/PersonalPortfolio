export interface Project {
    title: string;
    category: 'Professional' | 'Personal';
    company?: string;
    period: string;
    summary: string;
    highlights: string[];
    techStack: string[];
    link?: string;
}
