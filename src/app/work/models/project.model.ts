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
  contentPath: string;
  year: number;
  content?: string;
}

export enum ProjectTags {
  WORK = 'WORK',
  SIDE_QUESTS = 'SIDE QUESTS',
}
