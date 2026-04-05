import { Component } from '@angular/core';
import { WavyHeaderComponent } from '../../../shared/components/wavy-header/wavy-header.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-resume-timeline',
  templateUrl: './resume-timeline.component.html',
  styleUrl: './resume-timeline.component.scss',
  imports: [WavyHeaderComponent, NgClass],
})
export class ResumeTimelineComponent {
  resumeItems = [
    {
      name: 'Autorola',
      occupation: 'Frontend web developer',
      startDate: '2023',
      endDate: 'current',
      description: `👨‍💻 Developing and maintaining responsive, frontend applications for the Autorola Marketplace platform.

                    🛠️ Daily work using Angular, TypeScript, RxJS and bootstrap.

                    📅 Participating in Agile workflows, including code reviews, iteration planning and refinement.`,
      logo: 'assets/images/autorola_logo.jpg',
    },
    {
      name: 'Little Giants',
      occupation: 'App developer',
      startDate: '2022',
      endDate: '2023',
      description: `🚀 Assisting start-up companies in developing their mobile and web-based applications.

                    📱 Hone skills within building cross-platform frontend apps using Flutter, Dart, Riverpod and GraphQL.`,
      logo: 'assets/images/littlegiants_logo.png',
    },
    {
      name: 'Resturant Eventyr Golf',
      occupation: 'Waiter',
      startDate: '2021',
      endDate: '2022',
      description: `🍽️ Serving food and beverages to guests at Resturant Eventyr Golf`,
      logo: 'assets/images/eventyrgolf_logo.png',
    },
    {
      name: 'Danski',
      occupation: 'Vacation coordinator',
      startDate: '2018',
      endDate: '2019',
      description: `🎿 Guiding ski tours and assisting guests with ski-related activities at Danski.

                    🗻 Leading groups on mountain trails, ensuring safety and enjoyment.`,
      logo: 'assets/images/danski_logo.png',
    },
    {
      name: 'Guldborgsundhallerne',
      occupation: 'Lifeguard/instructor',
      startDate: '2012',
      endDate: '2020',
      description: `🛟 Ensuring the safety of swimmers and visitors at Guldborgsundhallerne.
      
                    📝 Instruction planning and facilitating exercise classes.`,
      logo: 'assets/images/scf_logo.jpg',
    },
  ];
}
