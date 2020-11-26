import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '';

  headers = new HttpHeaders().set('X-ListenAPI-Key', this.API_KEY);

  constructor(private httpClient: HttpClient) { }


  public getPodCasts(){
    return this.httpClient.get(
      `https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=140&page=0&region=us&safe_mode=0`, 
      { headers: this.headers, responseType: 'json'}
      
      );
  }
}
