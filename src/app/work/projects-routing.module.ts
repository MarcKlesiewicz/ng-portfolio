import { NgModule } from '@angular/core';
import { ProjectPageComponent } from './project-page/project-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'projects', component: ProjectPageComponent, title: 'klesiewicz.dev | work' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProjectsRoutingModule {}
