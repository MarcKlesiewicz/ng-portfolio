export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  logo?: string;
  technologies: ProjectTechnologies[];
  liveUrl?: string;
  githubUrl?: string;
  projectType: ProjectType;
  contentPath: string;
  year: number;
  content?: string;
}

export type ProjectType = 'ALL' | 'WORK' | 'SIDE QUESTS';

export type ProjectTechnologies =
  | 'Flutter'
  | 'Dart'
  | 'Riverpod'
  | 'MongoDB'
  | 'GraphQL'
  | 'Material'
  | 'ClickUp'
  | 'Angular'
  | 'RxJS'
  | 'NX'
  | 'TypeScript'
  | 'HTML5, CSS & Javascript'
  | 'Bootstrap'
  | 'Material Design'
  | 'Tailwind'
  | 'Firebase'
  | 'Pocketbase'
  | 'Node.js'
  | 'Jenkins'
  | 'Github'
  | 'Bitbucket'
  | 'Swagger'
  | 'Postman'
  | 'Thunder Client'
  | 'VSCode'
  | 'Visual Studio'
  | 'IntelliJ'
  | 'Jira'
  | 'Trello'
  | 'Figma'
  | 'Adobe XD'
  | 'PlantUML'
  | 'Visio'
  | 'Jasmine'
  | 'Karma';

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
