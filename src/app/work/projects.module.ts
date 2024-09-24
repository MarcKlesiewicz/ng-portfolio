import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [ProjectPageComponent, ProjectCardComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
