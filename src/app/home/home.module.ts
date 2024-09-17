import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, HeroSectionComponent, WorkSectionComponent],
})
export class HomeModule {}
