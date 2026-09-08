import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProjectResolution } from '../../work/data/project.resolver';

@Injectable({ providedIn: 'root' })
export class PortfolioMetaService {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  start(): void {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      const route = this.deepestRoute(this.router.routerState.snapshot.root);
      const resolution = route.data['project'] as ProjectResolution | undefined;
      const project = resolution?.status === 'ready' ? resolution.project : undefined;
      const title = project
        ? `${project.name} — Project | Marc Klesiewicz`
        : route.title ?? 'Marc Klesiewicz — Frontend and app developer';
      const description =
        project?.description ??
        route.data['description'] ??
        'Portfolio of Marc Klesiewicz, a frontend and app developer near Odense, Denmark.';
      this.title.setTitle(title);
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: description });
    });
  }
  private deepestRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = route;
    while (current.firstChild) current = current.firstChild;
    return current;
  }
}
