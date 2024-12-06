import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero-response.interface';
import { HeroesService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent implements OnInit {
  hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((res) => (this.hero = res));
  }
}
