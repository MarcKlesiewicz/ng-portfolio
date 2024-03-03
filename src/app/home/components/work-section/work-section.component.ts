import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss'],
})
export class WorkSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public workPlaces = [
    {
      name: 'Autorola',
      occupation: 'Frontend web developer',
      startYear: 2023,
      endYear: 'current',
    },
    {
      name: 'Little Giants',
      occupation: 'App developer',
      startYear: 2022,
      endYear: 2023,
    },
    {
      name: 'Resturant Eventyr Golf',
      occupation: 'Waiter',
      startYear: 2021,
      endYear: 2022,
    },
    {
      name: 'Danski',
      occupation: 'Vacation coordinator',
      startYear: 2018,
      endYear: 2019,
    },
    {
      name: 'Guldborgsundhallerne',
      occupation: 'Lifeguard/instructor',
      startYear: 2012,
      endYear: 2020,
    },
  ];
}
