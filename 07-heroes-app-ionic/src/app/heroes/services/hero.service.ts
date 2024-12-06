import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../interfaces/hero-response.interface';

const URL = 'http://localhost:3000/heroes';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroesList(): Observable<Hero[]> {
    return this.http.get<Hero[]>(URL);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${URL}/${id}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(URL, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw new Error('El id del héroe es requerido');
    return this.http.patch<Hero>(`${URL}/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<boolean> {
    return this.http.delete(`${URL}/${id}`).pipe(map(() => true));
  }
}
