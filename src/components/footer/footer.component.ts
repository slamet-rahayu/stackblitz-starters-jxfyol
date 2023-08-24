import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  imports: [CommonModule]
})
export class FooterComponent implements OnInit {
  links: string[] = [
    'About',
    'For Business',
    'Suggestions',
    'Help & FAQs',
    'Contacts',
    'Pricing'
  ]
  year: string = new Date().getFullYear().toString()
  constructor() {}

  ngOnInit(): void {
    console.log('object');
  }
}