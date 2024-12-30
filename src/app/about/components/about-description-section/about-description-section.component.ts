import { Component } from '@angular/core';

@Component({
  selector: 'app-about-description-section',
  templateUrl: './about-description-section.component.html',
  styleUrls: ['./about-description-section.component.scss'],
})
export class AboutDescriptionSectionComponent {
  selectedOption = 'myself-long';
  private birthDate = new Date(1995, 3, 21);
  private age = this.calculateAge(this.birthDate);
  selectedDescription = this.getDescription(this.selectedOption);

  descriptionOptions = [
    {
      value: 'myself-long',
      viewValue: 'myself (long version)',
    },
    {
      value: 'employers',
      viewValue: 'employers',
    },
    {
      value: 'chat-gbt',
      viewValue: 'chatGBT',
    },
  ];

  updateDescription(option: string) {
    this.selectedDescription = this.getDescription(option);
  }

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  private getDescription(option: string): string {
    switch (option) {
      case 'myself-long':
        return `Hello! I'm a 29-year-old app developer with a computer science background, originally from Lolland, now settled in a small town outside Odense, Denmark, with my girlfriend Mathilde and our dog Cody.

        I work mainly on developing apps, with a focus on frontend development – yes, it’s actually really cool! When I’m not diving into software, I’m probably exploring music, movies, or tackling DIY and renovation projects for our old house, which requires a lot of work. I also enjoy a good board game or hitting the paddle courts around Odense. My hobbies extend to mechanical keyboards and collecting signed vinyl records, though I don’t own a record player – just an odd obsession I’ve picked up.

        I value genuine communities and strive for meaningful goals, whether they’re personal or shared. My work reflects my passion for creating and pushing the boundaries of what I can achieve. But like many, I often find myself juggling a backlog of ideas with the limited hours in a day.

        So, that's me – an app developer, music lover, DIY enthusiast, and someone always looking for a new challenge or passion project.`;
      case 'chat-gbt':
        return `In the heart of Odense, Denmark, resides a man whose very existence thrives on the ethereal realm of code and software development. He is an enigma, with piercing eyes that mirror the depths of his intellect and a countenance that exudes a potent combination of passion and determination.
        
        His days are consumed by the relentless pursuit of technological excellence. With each keystroke, he weaves intricate algorithms and molds lines of code into functional art. His fingertips dance across the keyboard, an orchestra conducting a symphony of logic and creativity, crafting the digital landscapes of tomorrow.`;
      case 'employers':
        return `Marc is an extremely competent employee who works very independently and excels at coming up with constructive solutions and good ideas. Marc has demonstrated great initiative and has taken significant responsibility for his tasks. He is, in particular, a very cheerful and helpful personality, which we have greatly appreciated in the office.
        
        - Steffen Engsig Aagaard, CEO at LittleGiants`;
      default:
        return 'N/A';
    }
  }
}
