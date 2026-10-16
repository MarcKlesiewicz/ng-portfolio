import { DOCUMENT, Location } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { OrbitMarkComponent } from '@app/shared/components/orbit-mark/orbit-mark.component';
import { PortfolioIndexComponent } from '@app/shared/components/portfolio-index/portfolio-index.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { getWorkBySlug } from '../data/work-items';

@Component({
  selector: 'app-work-detail-page',
  templateUrl: './work-detail-page.component.html',
  styleUrl: './work-detail-page.component.scss',
  imports: [OrbitMarkComponent, PortfolioIndexComponent, FaIconComponent],
})
export class WorkDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly document = inject(DOCUMENT);
  private readonly openedFromWorkList = this.document.defaultView?.history.state?.fromWorkList === true;

  readonly faArrowLeft = faArrowLeft;
  readonly faArrowRight = faArrowRight;
  readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  readonly faDiamond = faDiamond;

  readonly work = toSignal(this.route.paramMap.pipe(map((params) => getWorkBySlug(params.get('slug')))), {
    requireSync: true,
  });

  readonly liveUrlLabel = computed(() => {
    const liveUrl = this.work()?.liveUrl;
    return liveUrl ? new URL(liveUrl).hostname.replace(/^www\./, '') : undefined;
  });

  returnToWork(event: MouseEvent): void {
    const isUnmodifiedPrimaryClick =
      event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey;

    if (!isUnmodifiedPrimaryClick) return;

    event.preventDefault();

    if (this.openedFromWorkList) {
      this.location.back();
      return;
    }

    void this.router.navigateByUrl('/work');
  }
}
