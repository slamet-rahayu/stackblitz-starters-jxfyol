import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('object');
  }
}