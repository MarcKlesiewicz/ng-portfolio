import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrbitMarkComponent } from '@app/shared/components/orbit-mark/orbit-mark.component';
import { PortfolioIndexComponent } from '@app/shared/components/portfolio-index/portfolio-index.component';
import { map } from 'rxjs';
import { getWorkBySlug } from '../data/work-items';

@Component({
  selector: 'app-work-detail-page',
  templateUrl: './work-detail-page.component.html',
  styleUrl: './work-detail-page.component.scss',
  imports: [RouterLink, OrbitMarkComponent, PortfolioIndexComponent],
})
export class WorkDetailPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly work = toSignal(this.route.paramMap.pipe(map((params) => getWorkBySlug(params.get('slug')))), {
    requireSync: true,
  });
}
