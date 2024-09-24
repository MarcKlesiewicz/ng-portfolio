export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  logo?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  tags: ProjectTags[];
  markdownPath: string;
  year: number;
}

export enum ProjectTags {
  WORK = 'WORK',
  SIDE_QUESTS = 'SIDE QUESTS',
}
