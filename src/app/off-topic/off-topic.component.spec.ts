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
    const title = element.querySelector('.soundcloud-title');
    const description = element.querySelector('.soundcloud-description');
    const player = element.querySelector<HTMLIFrameElement>('iframe[title="Midas Peak SoundCloud playlist"]');
    const playlistLink = element.querySelector<HTMLAnchorElement>(
      'a[href="https://soundcloud.com/midaspeak/sets/midas-peak"]',
    );

    expect(title?.textContent?.trim()).toBe('Music I’ve made');
    expect(description?.textContent?.trim()).toBe(
      'A small collection of tracks, edits, and experiments released as Midas Peak.',
    );
    expect(player?.src).toContain('api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2307101184');
    expect(player?.getAttribute('loading')).toBe('lazy');
    expect(player?.getAttribute('allow')).toBe('autoplay; encrypted-media');
    expect(playlistLink?.textContent).toContain('Midas Peak.');
  });

  it('includes the book tier list', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.book-ranking-title')?.textContent?.trim()).toBe('Book Tierlist 2026');
    expect(element.querySelector('app-book-tier-list')).not.toBeNull();
    expect(element.querySelectorAll('.tier-s .book-card img')).toHaveLength(3);
    expect(element.querySelectorAll('.tier-b .book-card img')).toHaveLength(3);
  });
});
