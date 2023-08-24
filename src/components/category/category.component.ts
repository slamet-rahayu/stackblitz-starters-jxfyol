import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  standalone: true,
  styleUrls: ['./category.component.css'],
  imports: [CommonModule]
})
export class CategoryComponent implements OnInit {
  category: string[] = [
    'Videos',
    'People',
    'Documents',
    'Events',
    'Communities'
  ]
  constructor() {}

  ngOnInit(): void {
    console.log('object');
  }
}