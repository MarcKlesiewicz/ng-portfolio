import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-about-description-section',
  templateUrl: './about-description-section.component.html',
  styleUrls: ['./about-description-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AboutDescriptionSectionComponent {
  readonly selectedOption = signal('myself-long');
  readonly selectedDescription = computed(() => this.getDescription(this.selectedOption()));
  private readonly birthDate = new Date(1995, 3, 21);
  private readonly age = this.calculateAge(this.birthDate);

  readonly descriptionOptions = [
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
  ] as const;

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
        return `Hello, and thanks for stopping by!
        My name is Marc. I build web and mobile applications for a living, and other cool shit for fun. I’m based in an old house on Funen, Denmark, where I live with my wife Mathilde and our dog Cody.

        I’m a frontend developer by trade, but I’ve always been more interested in building things than sticking neatly to one box. Sometimes that means obsessing over the details of an interface, sometimes it means 3D printing something I probably could have bought for less, and sometimes it means starting yet another side project because apparently the existing ones weren’t enough.

        Outside of software, I tend to rotate through hobbies at a fairly unhealthy pace. Electronics, DIY projects, board games, padel, music production and whatever else happens to catch my attention. My current obsession is learning to play the piano — with mixed results so far.

        If we ever play Trivial Pursuit, sports is the category you want me to land on. Music and movies, however, are a different story. For some reason, my brain has decided that obscure songs, actors and movie trivia are more important to retain than most actually useful information.`;
      case 'myself-short':
        return `I'm ${this.age}.
        No kids, but I do have a dog and a girlfriend (not in that order).

        I live near Odense in an old house, which require alot of work.

        And I'm a computer scientist focused on developing apps, mostly frontend, believe it or not, is actually really cool!

        Hobbies? Let’s see… software development (shocking, I know), music, movies, board games, mechanical keyboards, padel… and I’m oddly obsessed with collecting signed vinyl records, even though I don’t own a record player.

        My three biggest strengths are…

        *DING*`;
      case 'chat-gbt':
        return `In the heart of Odense, Denmark, resides a man whose very existence thrives on the ethereal realm of code and software development. He is an enigma, with piercing eyes that mirror the depths of his intellect and a countenance that exudes a potent combination of passion and determination.
        
        His days are consumed by the relentless pursuit of technological excellence. With each keystroke, he weaves intricate algorithms and molds lines of code into functional art. His fingertips dance across the keyboard, an orchestra conducting a symphony of logic and creativity, crafting the digital landscapes of tomorrow.`;
      default:
        return 'N/A';
    }
  }
}
