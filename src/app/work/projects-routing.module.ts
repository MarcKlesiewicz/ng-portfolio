import { NgModule } from '@angular/core';
import { ProjectPageComponent } from './project-page/project-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailPageComponent } from './project-detail-page/project-detail-page.component';

const routes: Routes = [
  { path: 'projects', component: ProjectPageComponent, title: 'klesiewicz.dev | projects' },
  { path: 'projects/:id', component: ProjectDetailPageComponent, title: 'klesiewicz.dev | projects' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProjectsRoutingModule {}
