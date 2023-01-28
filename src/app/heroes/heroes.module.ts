import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { FindHeroesComponent } from './pages/find-heroes/find-heroes.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImageConverterPipe } from './pipes/image-converter.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AddHeroComponent,
    FindHeroesComponent,
    HeroComponent,
    HomeComponent,
    HeroesListComponent,
    HeroCardComponent,
    ImageConverterPipe,
    ConfirmComponent,
  ],
  imports: [CommonModule, FormsModule, HeroesRoutingModule, MaterialModule],
})
export class HeroesModule {}
