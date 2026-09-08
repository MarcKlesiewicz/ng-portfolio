export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  logo?: string;
  technologies: ProjectTechnologies[];
  liveUrl?: string;
  githubUrl?: string;
  projectType: ProjectCategory;
  contentPath: string;
  year: number;
}

export type ProjectType = 'ALL' | 'WORK' | 'SIDE QUESTS';
export type ProjectCategory = Exclude<ProjectType, 'ALL'>;

export type ProjectTechnologies = string;

export const PROJECT_TECHNOLOGIES: ProjectTechnologies[] = [
  'Angular',
  'RxJS',
  'NX',
  'Flutter',
  'Riverpod',
  'TypeScript',
  'HTML5, CSS & Javascript',
  'Dart',
  'Bootstrap',
  'Material Design',
  'Tailwind',
  'Firebase',
  'Pocketbase',
  'Node.js',
  'Jenkins',
  'Github',
  'Bitbucket',
  'Swagger',
  'GraphQL',
  'Postman',
  'Thunder Client',
  'VSCode',
  'Visual Studio',
  'IntelliJ',
  'ClickUp',
  'Jira',
  'Trello',
  'Figma',
  'Adobe XD',
  'PlantUML',
  'Visio',
  'Jasmine',
  'Karma',
];
