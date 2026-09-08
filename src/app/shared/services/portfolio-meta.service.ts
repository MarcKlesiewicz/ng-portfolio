import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { ProjectResolution } from '../../content/models/portfolio-content.model';

@Injectable({ providedIn: 'root' })
export class PortfolioMetaService extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(routerState: RouterStateSnapshot): void {
    const route = this.deepestRoute(routerState.root);
    const resolution = route.data['project'] as ProjectResolution | undefined;
    const project = resolution?.status === 'ready' ? resolution.project : undefined;
    const title = project
      ? `${project.name} — Project | Marc Klesiewicz`
      : this.buildTitle(routerState) ?? 'Marc Klesiewicz — Frontend and app developer';
    const description =
      project?.description ??
      route.data['description'] ??
      'Portfolio of Marc Klesiewicz, a frontend and app developer near Odense, Denmark.';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
  }

  private deepestRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = route;
    while (current.firstChild) current = current.firstChild;
    return current;
  }
}
