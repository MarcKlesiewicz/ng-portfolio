import { Component } from '@angular/core';

@Component({
  selector: 'app-about-point-section',

  templateUrl: './about-point-section.component.html',
  styleUrls: ['./about-point-section.component.scss'],
})
export class AboutPointSectionComponent {
  points = [
    {
      title: 'Education',
      description:
        'Development of cross-platform applications has been the focal point for my current abilities.\n' +
        'I have so far worked on 6 commercial apps, three of which are live.\n' +
        'My areas of responsibility have been within the implementation/maintenance of the front end (app, web-app and websites),\n' +
        'facilitating workshops/customer meetings, specification of requirements and project estimation.',
      imagePath: 'assets/svgs/education.svg',
    },
    {
      title: 'Profession',
      description:
        'Development of cross-platform applications has been the focal point for my current abilities. I have so far worked on 6 commercial apps, three of which are live. My areas of responsibility have been within the implementation/maintenance of the front end (app, web-app and websites), facilitating workshops/customer meetings, specification of requirements and project estimation.',

      imagePath: 'assets/svgs/profession.svg',
    },
    {
      title: 'Motivation',
      description:
        "Right now, I'm driven by leveraging technology and my skills to solve real problems, big and small - software that makes sense. If I can simultaneously leave users with a sense of reliability, quality and intuitive/innovative design, I find it hard to ask for more. But I also know my journey has only just begun, and there is some way to become an independent full stack developer",
      imagePath: 'assets/svgs/focus.svg',
    },
  ];
}
