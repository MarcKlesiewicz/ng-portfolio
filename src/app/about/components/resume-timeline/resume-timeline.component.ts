import { Component } from '@angular/core';
import { WavyHeaderComponent } from '../../../shared/components/wavy-header/wavy-header.component';

@Component({
  selector: 'app-resume-timeline',
  templateUrl: './resume-timeline.component.html',
  styleUrl: './resume-timeline.component.scss',
  imports: [WavyHeaderComponent],
})
export class ResumeTimelineComponent {
  readonly resumeItems = [
    {
      name: 'Autorola',
      occupation: 'Frontend Developer',
      startDate: '2023',
      endDate: 'Present',
      description:
        'Building and evolving Autorola Marketplace with Angular, TypeScript and RxJS—from refinement and code review through delivery.',
      logo: 'assets/images/autorola_logo.jpg',
    },
    {
      name: 'Little Giants',
      occupation: 'App Developer',
      startDate: '2022',
      endDate: '2023',
      description: 'Built web and cross-platform products for startups with Flutter, Dart, Riverpod and GraphQL.',
      logo: 'assets/images/littlegiants_logo.png',
    },
    {
      name: 'Restaurant Eventyr Golf',
      occupation: 'Waiter',
      startDate: '2021',
      endDate: '2022',
      description: 'Worked front of house in a busy restaurant, keeping service calm and guests looked after.',
      logo: 'assets/images/eventyrgolf_logo.png',
    },
    {
      name: 'Danski',
      occupation: 'Vacation Coordinator',
      startDate: '2018',
      endDate: '2019',
      description:
        'Coordinated ski holidays and guided groups on the mountain, balancing hospitality, logistics and safety.',
      logo: 'assets/images/danski_logo.png',
    },
    {
      name: 'Guldborgsundhallerne',
      occupation: 'Lifeguard & Instructor',
      startDate: '2012',
      endDate: '2020',
      description: 'Kept swimmers safe and planned group exercise sessions as a lifeguard and instructor.',
      logo: 'assets/images/scf_logo.jpg',
    },
  ];
}
