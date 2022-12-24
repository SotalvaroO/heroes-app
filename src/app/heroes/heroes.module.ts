import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { FindHeroesComponent } from './pages/find-heroes/find-heroes.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    AddHeroComponent,
    FindHeroesComponent,
    HeroComponent,
    HomeComponent,
    HeroesListComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
