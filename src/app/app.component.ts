import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  navigate() {
    this.router.navigate([ 'player/add' ]);
  }
}
