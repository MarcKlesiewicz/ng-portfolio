import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';
import { ProjectDetailPageComponent } from './project-detail-page/project-detail-page.component';

@NgModule({
  declarations: [ProjectPageComponent, ProjectCardComponent, ProjectFilterComponent, ProjectDetailPageComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
