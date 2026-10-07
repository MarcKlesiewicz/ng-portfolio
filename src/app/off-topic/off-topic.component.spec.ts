import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { OffTopicComponent } from './off-topic.component';

describe('OffTopicComponent', () => {
  let fixture: ComponentFixture<OffTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffTopicComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(OffTopicComponent);
    fixture.detectChanges();
  });

  it('uses the shared masthead and marks Off topic as the current navigation item', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('app-page-masthead')).not.toBeNull();
    expect(element.querySelector('h1')?.textContent).toContain('Off topic');
    expect(element.querySelector('[aria-current="page"]')?.textContent).toContain('Off topic');
  });

  it('embeds the Midas Peak SoundCloud playlist', () => {
    const element: HTMLElement = fixture.nativeElement;
    const player = element.querySelector<HTMLIFrameElement>('iframe[title="Midas Peak SoundCloud playlist"]');
    const playlistLink = element.querySelector<HTMLAnchorElement>(
      'a[href="https://soundcloud.com/midaspeak/sets/midas-peak"]',
    );

    expect(player?.src).toContain('api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2307101184');
    expect(player?.getAttribute('loading')).toBe('lazy');
    expect(player?.getAttribute('allow')).toBe('autoplay; encrypted-media');
    expect(playlistLink?.textContent).toContain('Midas Peak.');
  });
});
