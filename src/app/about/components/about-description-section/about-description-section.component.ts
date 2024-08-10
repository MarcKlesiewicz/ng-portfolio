import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-description-section',
  templateUrl: './about-description-section.component.html',
  styleUrls: ['./about-description-section.component.scss'],
})
export class AboutDescriptionSectionComponent {
  descriptionOptions = [
    {
      value: 'myself-long',
      viewValue: 'myself (long version)',
    },
    {
      value: 'myself-short',
      viewValue: 'myself (speed date)',
    },
    {
      value: 'chat-gbt',
      viewValue: 'chatGBT',
    },
  ];
  selectedOption = 'myself-long';
}
