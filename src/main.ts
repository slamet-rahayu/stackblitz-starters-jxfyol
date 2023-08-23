import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
