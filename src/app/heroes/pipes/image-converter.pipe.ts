import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'imageConverter',
  pure: true              //hace que el pipe se esté llamando constantemente
})
export class ImageConverterPipe implements PipeTransform {
  transform(value: Hero): string {
    console.log(value.alt_img);
    if (!value.id && !value.alt_img) return 'assets/no-image.png';
    if (value.alt_img) return value.alt_img;
    return `assets/heroes/${value.id}.jpg`;
  }
}
