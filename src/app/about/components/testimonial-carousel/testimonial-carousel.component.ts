import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  source: string;
}

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TestimonialCarouselComponent implements OnInit, OnDestroy {
  readonly testimonials: Testimonial[] = [
    {
      quote:
        'Marc is an extremely competent employee who works very independently and excels at coming up with constructive solutions and good ideas. Marc has demonstrated great initiative and has taken significant responsibility for his tasks. He is, in particular, a very cheerful and helpful personality, which we have greatly appreciated in the office.',
      author: 'Steffen Engsig Aagaard',
      source: 'CEO at LittleGiants',
    },
    {
      quote:
        'Marc was a cheerful and curious boy who was always good at coming up with new games and getting the other children involved. On our walks, he often spent more time looking at the ground than ahead, searching for insects, stones and other interesting treasures. Because of his great love for animals and nature, I was convinced he would grow up to become a zoologist one day.',
      author: 'Kirsten',
      source: 'Nysted Kindergarten',
    },
  ];

  currentIndex = 0;

  readonly rotationDuration = '8s';

  private readonly rotationInterval = 8000;
  private rotationTimer?: ReturnType<typeof setTimeout>;
  private rotationStartedAt?: number;
  private remainingRotationTime = this.rotationInterval;
  private isHovered = false;
  private hasFocusWithin = false;

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    this.clearRotationTimer();
  }

  selectTestimonial(index: number): void {
    if (index === this.currentIndex) {
      return;
    }

    this.currentIndex = index;
    this.restartRotation();
  }

  onMouseEnter(): void {
    this.isHovered = true;
    this.updateRotation();
  }

  onMouseLeave(): void {
    this.isHovered = false;
    this.updateRotation();
  }

  onFocusIn(): void {
    this.hasFocusWithin = true;
    this.updateRotation();
  }

  onFocusOut(event: FocusEvent): void {
    const section = event.currentTarget as HTMLElement;
    const nextTarget = event.relatedTarget as Node | null;

    if (!nextTarget || !section.contains(nextTarget)) {
      this.hasFocusWithin = false;
      this.updateRotation();
    }
  }

  private showNextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  private updateRotation(): void {
    if (this.isHovered || this.hasFocusWithin) {
      this.pauseRotation();
      return;
    }

    this.startRotation();
  }

  private restartRotation(): void {
    this.clearRotationTimer();
    this.remainingRotationTime = this.rotationInterval;
    this.updateRotation();
  }

  private startRotation(): void {
    if (this.rotationTimer || this.testimonials.length < 2) {
      return;
    }

    this.rotationStartedAt = Date.now();
    this.rotationTimer = setTimeout(() => {
      this.rotationTimer = undefined;
      this.rotationStartedAt = undefined;
      this.remainingRotationTime = this.rotationInterval;
      this.showNextTestimonial();
      this.updateRotation();
    }, this.remainingRotationTime);
  }

  private pauseRotation(): void {
    if (!this.rotationTimer || this.rotationStartedAt === undefined) {
      return;
    }

    const elapsedTime = Date.now() - this.rotationStartedAt;
    this.remainingRotationTime = Math.max(0, this.remainingRotationTime - elapsedTime);
    this.clearRotationTimer();
  }

  private clearRotationTimer(): void {
    if (!this.rotationTimer) {
      return;
    }

    clearTimeout(this.rotationTimer);
    this.rotationTimer = undefined;
    this.rotationStartedAt = undefined;
  }
}
