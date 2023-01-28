import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HeroesRepository } from '../repositories/heroes.repository';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private repository: HeroesRepository) {}

  public getHeroes(query?: string) {
    return this.repository.findHeroes(query);
  }
  public getHeroeById(id: string) {
    return this.repository.findHeroById(id);
  }
  public createHero(hero: Hero) {
    return this.repository.createHero(hero);
  }
  public updateHero(hero: Hero, id: string) {
    return this.repository.updateHero(hero, id);
  }
  public deleteHero(id: string) {
    return this.repository.deleteHero(id);
  }
}
