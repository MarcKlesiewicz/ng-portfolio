import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_CONTENT } from '../content/portfolio-content.source';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  private readonly content = inject(PORTFOLIO_CONTENT);
  readonly profile = toSignal(this.content.profile$);
  readonly technologies = toSignal(this.content.technologies$, { initialValue: [] });
  technologyLabel(id: string): string {
    return this.technologies().find((item) => item.id === id)?.label ?? id;
  }
}
