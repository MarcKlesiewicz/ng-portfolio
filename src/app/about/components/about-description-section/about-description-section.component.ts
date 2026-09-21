import { Component } from '@angular/core';

@Component({
  selector: 'app-about-description-section',
  templateUrl: './about-description-section.component.html',
  styleUrls: ['./about-description-section.component.scss'],
})
export class AboutDescriptionSectionComponent {
  readonly description = `Hello, and thanks for stopping by!
        My name is Marc. I build web and mobile applications for a living, and other cool shit for fun. I’m based in an old house on Funen, Denmark, where I live with my wife Mathilde and our dog Cody.

        I’m a frontend developer by trade, but I’ve always been more interested in building things than sticking neatly to one box. Sometimes that means obsessing over the details of an interface, sometimes it means 3D printing something I probably could have bought for less, and sometimes it means starting yet another side project because apparently the existing ones weren’t enough.

        Outside of software, I tend to rotate through hobbies at a fairly unhealthy pace. Electronics, DIY projects, board games, padel, music production and whatever else happens to catch my attention. My current obsession is learning to play the piano — with mixed results so far.

        If we ever play Trivial Pursuit, sports is the category you want me to land on. Music and movies, however, are a different story. For some reason, my brain has decided that obscure songs, actors and movie trivia are more important to retain than most actually useful information.`;
}
