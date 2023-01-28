import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddHeroComponent implements OnInit {
  public isLoading: boolean = false;
  public updateId?: string;
  public publishers: Publisher[] = [Publisher.DCComics, Publisher.MarvelComics];
  public hero: Hero = {
    id: '',
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          if (id) return this.heroService.getHeroeById(id);
          return of(this.hero);
        })
      )
      .subscribe((hero) => (this.hero = hero));
  }

  public deleteHero() {
    if (!this.hero.id) return;
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: { ...this.hero },
    });
    dialog.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.isLoading = true;
          this.heroService.deleteHero(this.hero.id!).subscribe({
            next: (response) => {
              this.isLoading = false;
              this.router.navigate(['/heroes/heroes-list']);
            },
          });
        }
      },
    });
  }

  public saveHero() {
    if (this.hero.superhero.trim().length === 0) return;
    this.isLoading = true;

    if (this.hero.id) {
      this.heroService
        .updateHero(this.hero, this.hero.id)
        .subscribe((response) => {
          this.showSnackbar('Registro actualizado!', 2500);
          this.isLoading = false;
        });
      return;
    }

    this.heroService.createHero(this.hero).subscribe({
      next: (response) => {
        this.router.navigate(['/heroes', response.id]);
        this.showSnackbar('Registro creado!', 2500);
        this.isLoading = false;
      },
    });
  }

  private showSnackbar(msg: string, duration: number) {
    this.snackBar.dismiss();
    this.snackBar.open(msg, 'Cerrar!', {
      duration,
    });
  }
}
