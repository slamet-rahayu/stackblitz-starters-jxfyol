import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  standalone: true,
  styleUrls: ['./category.component.css'],
  imports: [CommonModule]
})
export class CategoryComponent implements OnInit {
  category: string[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCategory()
    .subscribe(
      (res) => {
        this.category = res
      }
    )
  }
}