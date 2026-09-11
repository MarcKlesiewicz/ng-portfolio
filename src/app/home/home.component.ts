import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIO_CONTENT } from '../content/portfolio-content.source';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly content = inject(PORTFOLIO_CONTENT);
  private readonly route = inject(ActivatedRoute);

  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  readonly corporateMode = computed(() => {
    const values = this.queryParams().getAll('corporate');
    return values.length === 1 && values[0] === 'true';
  });
  readonly profile = toSignal(this.content.profile$);
  readonly technologies = toSignal(this.content.technologies$, { initialValue: [] });
  readonly featuredProjects = toSignal(this.content.featuredProjects$, { initialValue: [] });
}
