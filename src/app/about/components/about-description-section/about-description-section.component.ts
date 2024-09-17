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
      value: 'myself-short',
      viewValue: 'myself (speed date)',
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
        return `Hello! I'm a ${this.age}-year-old app developer with a computer science background, originally from Lolland, now settled in a small town outside Odense (Denmark) with my girlfriend Mathilde and our dog Cody.

        My work mirrors my passions - diving into software and testing the boundaries of what I can create. I often find myself torn between the hours in a day and my backlog of ideas.

        When I'm not lost in code, I'm probably immersed in music, exploring the world of cinema, or tackling DIY/renovation projects for our home. I also enjoy a good boardgame or hitting the paddle courts around Odense.

        I value genuine communities and am driven by a desire to achieve meaningful goals, whether personal or shared.`;
      case 'myself-short':
        return `Hi! So, uh, is this your first time doing this too? Wait, the timer's already started?!

        I'm ${this.age}.
        No kids, but I do have a dog and a girlfriend (not in that order).

        I live near Odense in an old house, which require alot of work.

        And I'm a computer scientist focused on developing apps, mostly frontend, believe it or not, is actually really cool!

        Hobbies? Let’s see… software development (shocking, I know), music, movies, board games, mechanical keyboards, padel… and I’m oddly obsessed with collecting signed vinyl records, even though I don’t own a record player.

        My three biggest strengths are…

        *DING*`;
      case 'chat-gbt':
        return `Prompt: "Hello. Can you give me a brief description of a man who lives near Odense and enjoys developing software. And make it a bit dramatic"
        
        In the heart of Odense, Denmark, resides a man whose very existence thrives on the ethereal realm of code and software development. He is an enigma, with piercing eyes that mirror the depths of his intellect and a countenance that exudes a potent combination of passion and determination.
        
        His days are consumed by the relentless pursuit of technological excellence. With each keystroke, he weaves intricate algorithms and molds lines of code into functional art. His fingertips dance across the keyboard, an orchestra conducting a symphony of logic and creativity, crafting the digital landscapes of tomorrow.`;
      default:
        return 'N/A';
    }
  }
}
