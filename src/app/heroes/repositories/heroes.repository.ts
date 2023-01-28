import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { DataRepository } from '../../data-repository/data.repository';

@Injectable({ providedIn: 'root' })
export class HeroesRepository {
  constructor(private repository: DataRepository<Hero, string>) {}

  public readonly SERVICE_NAME: string = 'heroes';

  public findHeroes(query?: string) {
    return this.repository.getAll(this.SERVICE_NAME, query);
  }
  public findHeroById(id: string) {
    return this.repository.getById(this.SERVICE_NAME, id);
  }
  public createHero(hero: Hero) {
    return this.repository.post(this.SERVICE_NAME, hero);
  }
  public updateHero(hero: Hero, id: string) {
    return this.repository.edit(this.SERVICE_NAME, hero, id);
  }
  public deleteHero(id: string) {
    return this.repository.delete(this.SERVICE_NAME, id);
  }
}
