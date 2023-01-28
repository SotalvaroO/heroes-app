import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-find-heroes',
  templateUrl: './find-heroes.component.html',
  styles: [],
})
export class FindHeroesComponent implements OnInit {
  public term: string = '';
  public heroes: Hero[] = [];
  public selectedHero: Hero | undefined;

  constructor(private service: HeroesService) {}

  ngOnInit(): void {
    this.service.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  public findHeroes() {
    this.service.getHeroes(this.term.trim()).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  public selectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.term = hero.superhero;
    this.service
      .getHeroeById(hero.id!)
      .subscribe((hero) => (this.selectedHero = hero));
  }
}
