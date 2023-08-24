import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  standalone: true,
  styleUrls: ['./featured.component.css'],
  imports: [CommonModule]
})
export class FeaturedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('object');
  }
}