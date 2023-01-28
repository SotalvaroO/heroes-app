import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public hero!: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: HeroesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.service.getHeroeById(id).subscribe((response) => {
        this.hero = response;
      });
    });
  }
  public returToList() {
    this.router.navigate(['/heroes/heroes-list']);
  }
}
