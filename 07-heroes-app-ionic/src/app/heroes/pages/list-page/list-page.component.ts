import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero-response.interface';

@Component({
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ionViewWillEnter() {
    this.heroesService.getHeroesList().subscribe((res) => {
      this.heroes = res;
    });
  }
}
