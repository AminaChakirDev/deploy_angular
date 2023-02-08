import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=fr-FR&page=1`
    );
  };

  getMovieById(movieId: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/
        ${movieId}
        ?api_key=${environment.apiKey}&language=fr-FR`
    );
  }

  getTvShows = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/popular?api_key=${environment.apiKey}&language=fr-FR&page=1`
    );
  };

  getTvShowById(tvShowId: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/
        ${tvShowId}
        ?api_key=${environment.apiKey}&language=fr-FR`
    );
  }
}
