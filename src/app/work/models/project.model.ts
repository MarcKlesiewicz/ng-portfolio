export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  logo?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  projectType: ProjectType;
  contentPath: string;
  year: number;
  content?: string;
}

export type ProjectType = 'ALL' | 'WORK' | 'SIDE QUESTS';
