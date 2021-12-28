import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeroListComponent ],
  exports: [ HeroListComponent ]
})
export class HeroesModule { }