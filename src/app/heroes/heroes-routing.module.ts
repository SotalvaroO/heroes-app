import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { FindHeroesComponent } from './pages/find-heroes/find-heroes.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'heroes-list',
        component: HeroesListComponent,
      },
      {
        path: 'add-hero',
        component: AddHeroComponent,
      },
      {
        path: 'update-hero/:id',
        component: AddHeroComponent,
      },
      {
        path: 'find',
        component: FindHeroesComponent,
      },
      {
        path: ':id',
        component: HeroComponent,
      },
      {
        path: '**',
        redirectTo: 'heroes-list',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
