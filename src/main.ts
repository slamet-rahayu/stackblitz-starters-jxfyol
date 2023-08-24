import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CategoryComponent,
    FeaturedComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule)
  ]
});
