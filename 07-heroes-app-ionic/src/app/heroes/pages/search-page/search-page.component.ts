import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero-response.interface';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  searchText: string = '';
  heroes: Hero[] = [];
  heroSelected: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroesList().subscribe((res) => {
      this.heroes = res;
    });
  }

  onSearchChange(event: any) {
    const value = event.detail.value;

    if (value === '') {
      this.heroSelected = [];
      return;
    }

    const valueToFilter = value.toLowerCase();

    const selected = this.heroes.filter((hero: Hero) => {
      return hero.superhero.toLocaleLowerCase().includes(valueToFilter);
    });

    this.heroSelected = selected;
  }
}
