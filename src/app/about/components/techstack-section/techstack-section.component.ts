import { Component } from '@angular/core';

@Component({
  selector: 'app-techstack-section',
  templateUrl: './techstack-section.component.html',
  styleUrls: ['./techstack-section.component.scss'],
})
export class TechstackSectionComponent {
  readonly toolGroups = [
    {
      marker: 'I',
      title: 'Interface craft',
      description: 'Building responsive product interfaces for web and mobile.',
      tools: ['Angular', 'TypeScript', 'RxJS', 'NX', 'HTML, CSS & JavaScript', 'Flutter', 'Dart', 'Riverpod'],
    },
    {
      marker: 'II',
      title: 'Systems & data',
      description: 'Connecting application state, APIs and services into clear product flows.',
      tools: ['GraphQL', 'Firebase', 'Pocketbase', 'Node.js', 'Swagger', 'Postman', 'Thunder Client'],
    },
    {
      marker: 'III',
      title: 'Shape & explain',
      description: 'Turning rough ideas into shared visual and technical direction.',
      tools: ['Figma', 'Adobe XD', 'Material Design', 'Tailwind', 'Bootstrap', 'PlantUML', 'Visio'],
    },
    {
      marker: 'IV',
      title: 'Ship & improve',
      description: 'Testing, delivering and refining work alongside the team.',
      tools: [
        'Jenkins',
        'GitHub',
        'Bitbucket',
        'Jasmine',
        'Karma',
        'VS Code',
        'Visual Studio',
        'IntelliJ',
        'ClickUp',
        'Jira',
        'Trello',
      ],
    },
  ];
}
