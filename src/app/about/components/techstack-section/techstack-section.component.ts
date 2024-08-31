import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-techstack-section',
  templateUrl: './techstack-section.component.html',
  styleUrls: ['./techstack-section.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 1 })),
      state('out', style({ height: '0px', opacity: 0 })),
      transition('in <=> out', animate('300ms ease-in-out')),
    ]),
  ],
})

//TODO: add jest, daisyUI
export class TechstackSectionComponent {
  hideTechStackInfo = true;

  techstack = [
    // Frontend Frameworks and Libraries
    { name: 'Angular', icon: 'angular_logo.svg' },
    { name: 'RxJS', icon: 'rxjs_logo.svg' },
    { name: 'NX', icon: 'nx_logo.svg' },
    { name: 'Flutter', icon: 'flutter_logo.svg' },
    { name: 'Riverpod', icon: 'riverpod_logo.svg' },

    // Languages
    { name: 'TypeScript', icon: 'typescript_logo.svg' },
    { name: 'HTML5, CSS & Javascript', icon: 'web_logo.svg' },
    { name: 'Dart', icon: 'dart_logo.svg' },

    // UI Frameworks
    { name: 'Bootstrap', icon: 'bootstrap_logo.svg' },
    { name: 'Material Design', icon: 'material_logo.svg' },
    { name: 'Tailwind', icon: 'tailwind_logo.svg' },

    // Backend and Databases
    { name: 'Firebase', icon: 'firebase_logo.svg' },
    { name: 'Pocketbase', icon: 'pocketbase_logo.svg' },
    { name: 'Node.js', icon: 'nodejs_logo.svg' },

    // CI/CD
    { name: 'Jenkins', icon: 'jenkins_logo.svg' },

    // Version Control
    { name: 'Github', icon: 'github_logo_black.svg' },
    { name: 'Bitbucket', icon: 'bitbucket_logo.svg' },

    // API Tools
    { name: 'Swagger', icon: 'swagger_logo.svg' },
    { name: 'GraphQL', icon: 'graphql_logo.svg' },
    { name: 'Postman', icon: 'postman_logo.svg' },
    { name: 'Thunder Client', icon: 'thunder_client_logo.svg' },

    // IDEs
    { name: 'VSCode', icon: 'vscode_logo.svg' },
    { name: 'Visual Studio', icon: 'vs_logo.svg' },
    { name: 'IntelliJ', icon: 'intellij_logo.svg' },

    // Project Management
    { name: 'ClickUp', icon: 'clickup_logo.svg' },
    { name: 'Jira', icon: 'jira_logo.svg' },
    { name: 'Trello', icon: 'trello_logo.svg' },

    // Design Tools
    { name: 'Figma', icon: 'figma_logo.svg' },
    { name: 'Adobe XD', icon: 'xd_logo.svg' },

    // Diagramming Tools
    { name: 'PlantUML', icon: 'plant_uml.svg' },
    { name: 'Visio', icon: 'visio_logo.svg' },

    // Testing Tools
    { name: 'Jasmine', icon: 'jasmine_logo.svg' },
    { name: 'Karma', icon: 'karma_logo.svg' },
  ];

  toogleTechStackInfo() {
    this.hideTechStackInfo = !this.hideTechStackInfo;
  }
}
