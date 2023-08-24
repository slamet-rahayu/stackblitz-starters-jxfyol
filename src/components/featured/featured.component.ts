import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { TActivities, TArticle, Tchannels } from '../../interfaces/interface'

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  standalone: true,
  styleUrls: ['./featured.component.css'],
  imports: [CommonModule]
})
export class FeaturedComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  articles1: TArticle = [];
  articles2: TArticle = [];
  articles3: TArticle = [];
  activities: TActivities = [];
  channels: Tchannels = [];

  ngOnInit(): void {
    this.getArticles();
    this.getActivities();
    this.getChannels();
  }

  getArticles() {
    this.apiService.getArticles()
    .subscribe((res) => {
      const article1 = res.slice(0, 5);
      const article2 = res.slice(5, 10);
      const article3 = res.slice(10, 15);
      this.articles1 = article1;
      this.articles2 = article2;
      this.articles3 = article3;
    })
  }

  getActivities() {
    this.apiService.getActivities()
    .subscribe((res) => {
      this.activities = res;
    })
  }

  getChannels() {
    this.apiService.getChannels()
    .subscribe((res) => {
      this.channels = res;
    })
  }
}