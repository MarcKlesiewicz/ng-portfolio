import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, HeroSectionComponent, WorkSectionComponent],
  exports: [HeroSectionComponent, WorkSectionComponent],
})
export class HomeModule {}
