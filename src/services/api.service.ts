import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TArticle, TActivities, Tchannels } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseApi = 'https://64e77a46b0fd9648b79002f1.mockapi.io';
  private baseApi1 = 'https://64e79e42b0fd9648b7902f69.mockapi.io';
  constructor(private http: HttpClient) {}

  getCategory(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseApi}/categories`)
  }

  getArticles(): Observable<TArticle> {
    return this.http.get<TArticle>(`${this.baseApi}/articles`)
  }
  
  getActivities(): Observable<TActivities> {
    return this.http.get<TActivities>(`${this.baseApi1}/activities`)
  }
  
  getChannels(): Observable<Tchannels> {
    return this.http.get<Tchannels>(`${this.baseApi1}/channels`)
  }
}