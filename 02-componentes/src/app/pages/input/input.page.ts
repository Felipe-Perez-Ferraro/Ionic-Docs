import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
})
export class InputPage implements OnInit {
  usuario = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    console.log('submit');
  }
}
