import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero-response.interface';
import { ToastController } from '@ionic/angular';

@Component({
  templateUrl: './new-hero-page.component.html',
  styleUrls: ['./new-hero-page.component.scss'],
})
export class NewHeroPageComponent implements OnInit {
  myForm: FormGroup;
  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {
    this.myForm = this.formBuilder.group({
      id: [''],
      superhero: ['', Validators.required],
      publisher: ['', Validators.required],
      alter_ego: ['', Validators.required],
      first_appearance: ['', Validators.required],
      characters: ['', Validators.required],
      hero_alt: [''],
    });
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');
        this.myForm.reset(hero);
        return;
      });
  }

  get hero() {
    return this.myForm.value as Hero;
  }

  onSubmit() {
    if (this.myForm.invalid) return;

    if (this.hero.id) {
      this.heroesService.updateHero(this.hero).subscribe((hero) => {
        this.presentToast(`${hero.superhero} actualizado!`);
      });
      return;
    }

    this.myForm.patchValue({ id: this.randomString() });
    this.heroesService.addHero(this.hero).subscribe((res) => {
      this.router.navigateByUrl('/');
      this.presentToast(`${res.superhero} creado`);
    });
  }

  onDeleteHero() {
    this.heroesService.deleteHero(this.hero.id).subscribe(() => {
      this.router.navigateByUrl('/');
      this.presentToast(`${this.hero.superhero} eliminado`);
    });
  }

  private async presentToast(hero: string) {
    const toast = await this.toastController.create({
      message: `${hero} con exito.`,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  private randomString(): string {
    const random = Math.random().toString(36).substring(2, 12);
    return random;
  }
}
